'use strict';

angular.module('fiveApi.docs.weaponsArmor', [])
  .controller('DocsWeaponsArmorController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.weaponsArmor', {
        url: '/weapons-armor',
        templateUrl: 'app/docs/weapons-armor/weapons-armor.html',
        controller: 'DocsWeaponsArmorController'
      });
  });