'use strict';

describe('fiveApi.docs', function() {
  var apiService, ctrl;

  beforeEach(module('fiveApi.docs'));
  beforeEach(module('fiveApi.apiService'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($controller, _ApiService_) {
    ctrl = $controller('DocsCtrl');
    apiService = _ApiService_;
  }))

  describe('State', function () {
    var $state,
      $rootScope,
      state = 'docs';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/docs/docs.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/docs');
    });

    // Test whether our state activates correctly
    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('DocsCtrl', function () {
    it('should exist', function () {
      expect(ctrl).toBeDefined();
    })
  })
});