describe('fiveApi.components.codeBox', function () {
  var ctrl, scope;

  beforeEach(module('fiveApi.templates'));
  beforeEach(module('fiveApi.components.codeBox'));

  beforeEach(inject(function($rootScope, $componentController) {
    scope = $rootScope.$new();
    ctrl = $componentController('codeBox',
      {$scope: scope},
      {
        title: 'weapons_armor',
        content: 'Loading ...'
      }
    )
  }));

  it('should have the information loaded into the component scope', function () {
    expect(ctrl.title).toEqual('weapons_armor');
    expect(ctrl.content).toEqual('Loading ...');
  })
});
