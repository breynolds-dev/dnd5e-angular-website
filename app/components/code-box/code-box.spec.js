describe('fiveApi.components.codeBox', function () {
  var element, scope;

  beforeEach(module('fiveApi.templates'));
  beforeEach(module('fiveApi.components.codeBox'));

  beforeEach(inject(function($rootScope, $compile, $templateCache) {
    $templateCache.put('app/components/code-box/code-box.html', '');

    scope = $rootScope.$new();

    element = angular.element('<code-box name="{{name}}" content="{{content}}"></code-box>');
    element = $compile(element)(scope);

    scope.name = "weapons_index";
    scope.content = "Loading ...";
    scope.$digest();
  }));

  it('displays a box', function () {
    expect(element.text()).toBe('Loading ...');
  });
})
