(function(){

	angular.module('quickSurveyGenerator', [])
	.directive('survey', function(){

		return {
			restrict: "E",
			templateUrl: "app/questions.html",
			scope: {
				questions: '='
			},
			controller: ['$scope', 'Animation', function($scope, Animation) {

				$scope.currentQuestion = 1;

				$scope.complete = false;

				$scope.empty = false;

				$scope.display = $scope.questions[$scope.currentQuestion - 1];

				$scope.numOfQuestions = $scope.questions.length

				$scope.nextQ = function(answer){

					if (!answer){
						answer = "N/A"
					}// if answer provided is blank

					var progressBar = 100 / $scope.numOfQuestions;//figure out how much to progress the bar after each submitted question.

					$scope.questions[$scope.currentQuestion -1].A = answer// adds answer to data structure

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

					$scope.display = $scope.questions[$scope.currentQuestion -1]; //changes display
					
					$scope.answer = ""; //clears input on next question

					Animation.animate(progressBar);
				}

			}]
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



