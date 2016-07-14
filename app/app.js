(function(){
	angular.module('Questions', [])
	.controller('MainCtrl', ['$scope', function($scope){

		$scope.currentQuestion = 1;



		$scope.complete = false;

		//input your questions here
		$scope.questions = {
			"1": {Q: 'Jon Lehman is the man',A: ""},
			"2": {Q:'I wish I was Jon Lehman', A: ""},
			"3": {Q:'Jon Lehman vs Everybody',A: ""},
			"4": {Q:'Go Idea42!',A:""}
		}

		$scope.numOfQuestions = Object.keys($scope.questions).length


		$scope.display = $scope.questions[$scope.currentQuestion];



		$scope.nextQ = function(answer){
			var progressBar = 100 / $scope.numOfQuestions;

			$scope.questions[$scope.currentQuestion].A = answer

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
	}])

	.directive('survey', function(){
		return {
			restrict: "E",
			templateUrl: "app/questions.html"
		}
	});



	//set progress bar first!!

	
}())



