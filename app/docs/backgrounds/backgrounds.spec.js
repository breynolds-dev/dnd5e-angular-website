describe('fiveApi.docs.backgrounds', function() {
  var $controller;

  beforeEach(module('fiveApi'));
  beforeEach(module('fiveApi.apiService'));
  beforeEach(module('fiveApi.docs'));
  beforeEach(module('fiveApi.docs.backgrounds'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('State', function () {
    var $state,
      $rootScope,
      state = 'docs.backgrounds';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/docs/docs.html', '');
      $templateCache.put('app/docs/backgrounds/backgrounds.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/docs/backgrounds');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('Controller', function() {
    var DocsBackgroundsController;

    beforeEach(function() {
      DocsBackgroundsController = $controller('DocsBackgroundsController', { });
    });

    it('should be defined', function() {
      expect(DocsBackgroundsController).toBeDefined();
    });
  });
});