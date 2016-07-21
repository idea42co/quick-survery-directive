(function(){

	angular.module('quickSurveyGenerator', [])
	.controller('SurveyController', ['$scope', 'Animation', function($scope, Animation){

		$scope.currentQuestion = 1;

		$scope.complete = false;

		$scope.empty = false;

		$scope.qSet = ['test', 'testinggg']// Define all question here comma seperated

		$scope.questions = {}//Your questions data structure will be built here

		$scope.setQuestionStruct = function(){
			$.each($scope.qSet, function(index, value){$scope.questions[index + 1] = {Q: value, A: ""}})
			$scope.numOfQuestions = Object.keys($scope.questions).length

			if ($scope.currentQuestion > $scope.numOfQuestions){
				$scope.empty = true;
			}
		}
		$scope.setQuestionStruct()

		$scope.display = $scope.questions[$scope.currentQuestion];

		$scope.nextQ = function(answer){

			if (!answer){
				answer = "N/A"
			}// if answer provided is blank

			var progressBar = 100 / $scope.numOfQuestions;//figure out how much to progress the bar after eah submitted question.

			$scope.questions[$scope.currentQuestion].A = answer// adds answer to data structure

			if ($scope.currentQuestion < $scope.numOfQuestions){
				$scope.currentQuestion += 1;
			} 
			else {
				$('.progress-bar').animate({
		  	 		'marginLeft' : "+="  + progressBar + "%"
				 });

				$scope.complete = true;

				Animation.animate();

				return;
			}

			$scope.display = $scope.questions[$scope.currentQuestion]; //changes display
			
			$scope.answer = ""; //clears input on next question

			Animation.animate(progressBar);
		}


		// function setQuestionStruct(){
		// 	$.each($scope.qSet, function(index, value){$scope.questions[index + 1] = {Q: value, A: ""}})
		// 	$scope.numOfQuestions = Object.keys($scope.questions).length

		// 	if ($scope.currentQuestion > $scope.numOfQuestions){
		// 		$scope.empty = true;
		// 	}
		// }

	}])

	.directive('survey', function(){
		return {
			restrict: "E",
			templateUrl: "app/questions.html"
		}
	})

	.service('Animation', function(){
		this.animate = function(progressBar){
			$('#form-wrap').animate({
				'marginTop' : "-=148px"
			})
			$('#form-wrap').animate({
				'marginTop' : "+=148px"
			})
			$('.progress-bar').animate({
		  	 'marginLeft' : "+="  + progressBar + "%"
			 });
		}

		this.progress = function(numOfQuestions){
			return 100 / numOfQuesitons
		}
	})
	
}())



