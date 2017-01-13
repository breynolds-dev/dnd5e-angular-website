'use strict';

angular.module('fiveApi.version', [
  'fiveApi.version.interpolate-filter',
  'fiveApi.version.version-directive'
])

.value('version', '0.1');
