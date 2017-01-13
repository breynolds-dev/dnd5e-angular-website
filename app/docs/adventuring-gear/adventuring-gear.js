'use strict';

angular.module('fiveApi.docs.adventuringGear', [])
  .controller('DocsAdventuringGearController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.adventuringGear', {
        url: '/adventuring-gear',
        templateUrl: 'app/docs/adventuring-gear/adventuring-gear.html',
        controller: 'DocsAdventuringGearController'
      });
  });