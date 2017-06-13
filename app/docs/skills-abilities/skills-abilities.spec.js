describe('fiveApi.docs.skillsAbilities', function() {
  var $controller;

  beforeEach(module('fiveApi'));
  beforeEach(module('fiveApi.apiService'));
  beforeEach(module('fiveApi.docs'));
  beforeEach(module('fiveApi.docs.skillsAbilities'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('State', function () {
    var $state,
      $rootScope,
      state = 'docs.skillsAbilities';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/docs/docs.html', '');
      $templateCache.put('app/docs/skills-abilities/skills-abilities.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/docs/skills-abilities');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('Controller', function() {
    var DocsSkillsAbilitiesController;

    beforeEach(function() {
      DocsSkillsAbilitiesController = $controller('DocsSkillsAbilitiesController', { });
    });

    it('should be defined', function() {
      expect(DocsSkillsAbilitiesController).toBeDefined();
    });
  });
});