(function(){
	angular.module('Test', ['quickSurveyGenerator'])
	.controller('TestController', ['$scope', function($scope) {
		$scope.questionSet = [
			{Q: "test1", A: ""},
			{Q: "test2", A: ""},
			{Q: "test3", A: ""}
		]

		$scope.complete = []
	}])
}())