'use strict';

describe('fiveApi.version module', function() {
  beforeEach(module('fiveApi.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
