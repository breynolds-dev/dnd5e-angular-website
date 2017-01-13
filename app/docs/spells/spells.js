'use strict';

angular.module('fiveApi.docs.spells', [])
  .controller('DocsSpellsController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.spells', {
        url: '/spells',
        templateUrl: 'app/docs/spells/spells.html',
        controller: 'DocsSpellsController'
      });
  });