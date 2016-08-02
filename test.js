angular.module('ngcTest', ['quickSurveyDirective'])
.controller('TestController', function($scope) {

	 $scope.questionSet = [
        {Q: "test1", A: ""},
        {Q: "test2", A: ""},
        {Q: "test3", A: ""},
        {Q: "Is Jon the man?", A: ""}
    ]
})