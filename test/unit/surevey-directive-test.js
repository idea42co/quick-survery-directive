describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function(){
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(100));
		})
	})
})

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