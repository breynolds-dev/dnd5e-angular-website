describe('fiveApi.docs.weaponsArmor', function() {
  var $controller;

  beforeEach(module('fiveApi.docs'));
  beforeEach(module('fiveApi.docs.weaponsArmor'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('State', function () {
    var $state,
      $rootScope,
      state = 'docs.weaponsArmor';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/docs/docs.html', '');
      $templateCache.put('app/docs/weapons-armor/weapons-armor.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/docs/weapons-armor');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('Controller', function() {
    var DocsWeaponsArmorController;

    beforeEach(function() {
      DocsWeaponsArmorController = $controller('DocsWeaponsArmorController', { });
    });

    it('should be defined', function() {
      expect(DocsWeaponsArmorController).toBeDefined();
    });
  });
});