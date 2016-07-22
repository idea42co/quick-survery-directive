describe('SurveyController', function() {
	beforeEach(module('quickSurveyGenerator'));

	describe('setQuestionStruct()', function() {
		it('should handle names correctly', inject(function($controller) {
			var scope = {};

			var SurveyController = $controller('SurveyController', {
				$scope: scope
			});

			scope.qSet = ['test', 'testing'];


			scope.setQuestionStruct()

			expect(scope.questions).to.deep.equal({
				"1": {Q:'test', A: ''},
				"2": {Q:'testing', A: ''}
			})
		}))
	})
})