'use strict';

describe('fiveApi.home', function() {
  var apiService, ctrl;

  beforeEach(module('fiveApi.home'));
  beforeEach(module('fiveApi.apiService'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller, _ApiService_) {
    ctrl = $controller('HomeCtrl');
    apiService = _ApiService_;
  }))

  describe('State', function () {
    var $state,
        $rootScope,
        state = 'home';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/home/home.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/home');
    });

    // Test whether our state activates correctly
    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('HomeCtrl', function () {
    it('should exist', function () {
      expect(ctrl).toBeDefined();
    })
  })
});