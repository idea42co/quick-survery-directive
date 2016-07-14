(function(){
	angular.module('Questions', [])
	.controller('MainCtrl', ['$scope', function($scope){

		$scope.currentQuestion = 1;

		$scope.complete = false;

		//input your questions here
		$scope.questions = {
			"1": 'Jon Lehman is the man',
			"2": 'I wish I was Jon Lehman',
			"3": 'Jon Lehman vs Everybody',
			"4": 'Go Idea42!'
		}

		$scope.numOfQuestions = Object.keys($scope.questions).length


		$scope.display = $scope.questions[$scope.currentQuestion];



		$scope.nextQ = function(){
			var progressBar = 100 / $scope.numOfQuestions;

			if ($scope.currentQuestion < $scope.numOfQuestions){
				$scope.currentQuestion += 1;
			} 
			else {
				$scope.complete = true;
				return;
			}
			$scope.display = $scope.questions[$scope.currentQuestion];
			
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


		$(document).ready(function(){
				function progressBar(){
					var progressBar = 100 / $scope.numOfQuestions;
					console.log($scope.numOfQuestions)
					console.log(progressBar);
					console.log('figure out how to set progress bar correctly');
					console.log($('.progress-bar'))
					$('.progress-bar').animate({
				  	 'marginLeft' : "+="  + progressBar + "%"
					 });
				}
				progressBar();

		})
	}])

	.directive('survey', function(){
		return {
			restrict: "E",
			templateUrl: "app/questions.html"
		}
	});



	//set progress bar first!!

	
}())



