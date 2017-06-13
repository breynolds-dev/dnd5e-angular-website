describe('fiveApi.docs.feats', function() {
  var $controller;

  beforeEach(module('fiveApi'));
  beforeEach(module('fiveApi.apiService'));
  beforeEach(module('fiveApi.docs'));
  beforeEach(module('fiveApi.docs.feats'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('State', function () {
    var $state,
      $rootScope,
      state = 'docs.feats';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/docs/docs.html', '');
      $templateCache.put('app/docs/feats/feats.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/docs/feats');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('Controller', function() {
    var DocsFeatsController;

    beforeEach(function() {
      DocsFeatsController = $controller('DocsFeatsController', { });
    });

    it('should be defined', function() {
      expect(DocsFeatsController).toBeDefined();
    });
  });
});