describe('Quick Survey Directive', function() {
 
 var el, scope, controller, grabbedScope;

 beforeEach(module('quickSurveyDirective'))

 beforeEach(inject(function(_$rootScope_, _$compile_) {
  $compile = _$compile_;
  $rootScope = _$rootScope_

  //define the scope first
  var scope = $rootScope.$new();


  scope.test =[
        {Q: "test1", A: ""},
        {Q: "test2", A: ""}
    ]


  el = angular.element("<survey ng-attr-questions ='test'></survey>")
  $compile(el)(scope)
  scope.$digest();

  //grab controller instance
  controller = el.controller('survey');

  //grab scope. Depends on type of scope.
  grabbedScope = el.isolateScope() || el.scope();


 }));

 it('should have the current question variable set to one', function() {

    expect(grabbedScope.currentQuestion).to.eql(1);
 });


 it('Current Question variable should increase by one', function() {
    // angular.element documentation
    el.find('button').triggerHandler('click');

    expect(grabbedScope.currentQuestion).to.eq(2);
 });

 it('The display variable should show the first question in the set', function() {
    expect(grabbedScope.display.Q).to.eq("test1")
 });

 it('Should change the display question on clicking on submission', function() {
    el.find('button').triggerHandler('click');

    expect(grabbedScope.display.Q).to.eq('test2')
 })

 it('Should show complete when done with question set', function() {
    el.find('button').triggerHandler('click');
    el.find('button').triggerHandler('click');

    expect(grabbedScope.complete).to.be.true
 })

})

