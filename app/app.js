(function(){
	angular.module('Questions', [])
	.controller('MainCtrl', ['$scope', function($scope){

		$scope.currentQuestion = 0;

		$scope.complete = false;

		$scope.qSet = ['wtest', 'atest', 'ctest', 'btest']// Define all question here comma seperated

		$scope.questions = {}//Your questions data structure will be built here

		setQuestionStruct()

		$scope.display = $scope.questions[$scope.currentQuestion];

		$scope.nextQ = function(answer){

			if (!answer){
				answer = "N/A"
			}// if answer provided is blank

			var progressBar = 100 / $scope.numOfQuestions;//figure out how much to progress the bar after eah submitted question.

			$scope.questions[$scope.currentQuestion].A = answer// adds answer to data structure
			console.log($scope.currentQuestion);
			console.log($scope.numOfQuestions);
			if ($scope.currentQuestion < $scope.numOfQuestions){
				$scope.currentQuestion += 1;
			} 
			else {
				$('.progress-bar').animate({
		  	 		'marginLeft' : "+="  + progressBar + "%"
				 });
				$scope.complete = true;
				return;
			}

			$scope.display = $scope.questions[$scope.currentQuestion]; //changes display
			console.log($scope.display)
			
			$scope.answer = ""; //clears input on next question

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


		function setQuestionStruct(){
			$.each($scope.qSet, function(index, value){$scope.questions[index ] = {Q: value, A: ""}})
			$scope.numOfQuestions = Object.keys($scope.questions).length
		}

	}])

	.directive('survey', function(){
		return {
			restrict: "E",
			templateUrl: "app/questions.html"
		}
	})
	
}())



