(function(){

	angular.module('quickSurveyDirective', [])
	.directive('survey', function(){

		return {
			restrict: "E",
			 replace: true,
			template: '<div class="container">' +
							'<div class="hider">' +
								'<div id="form-wrap">' +
									'<div ng-hide = "complete" class = "question">'+
										'<div class="col-xs-12">'+
											'<h1>{{display.Q}}</h1>'+
										'</div>'+
									'<div class="col-xs-10">' +
										'<input ng-model = "answer"></input>' +
									'</div>' +
					'<div class="col-xs-2">' +
						'<button ng-click = "nextQ(answer)" class="btn next-btn" id = "submitnext">' +
							'<i class="fa fa-arrow-right" aria-hidden="true"></i>' +
									'</button>' +
								'</div>' +
								'<div class="col-xs-12 indicator">' +
									'<p>question {{currentQuestion}} / {{numOfQuestions}}</p>' +
								'</div>' +
								'<div class="progress-bar"></div>' +
						'</div>' +
						
							'<div ng-show = "complete" class = "completed">' +
								'<div class = "col-xs-12"><h1>Completed</h1></div>' +
								'<div class="progress-bar"></div>' +
							'</div>' +

							'<div ng-show = "empty" class = "empty">' +
								'<div class = "col-xs-12"><h1>Please fill out some questions</h1></div>' +
							'</div>'+
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>',
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



