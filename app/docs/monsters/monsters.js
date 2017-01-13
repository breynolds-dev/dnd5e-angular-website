'use strict';

angular.module('fiveApi.docs.monsters', [])
  .controller('DocsMonstersController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.monsters', {
        url: '/monsters',
        templateUrl: 'app/docs/monsters/monsters.html',
        controller: 'DocsMonstersController'
      });
  });