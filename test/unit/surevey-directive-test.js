describe('Quick Survey Directive', function() {
  var elm, scope;

  beforeEach(module("quickSurveyDirective"));
  beforeEach(module("my.templates"))

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }))

  it('should have the scope elements defined', function() {
    
    expect(1).to.equal(1);
  })

})