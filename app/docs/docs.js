'use strict';

angular
  .module('fiveApi.docs', [
    'ui.router',
    'fiveApi.home',
    'fiveApi.docs',
    'fiveApi.docs.adventuringGear',
    'fiveApi.docs.backgrounds',
    'fiveApi.docs.classes',
    'fiveApi.docs.feats',
    'fiveApi.docs.introduction',
    'fiveApi.docs.languages',
    'fiveApi.docs.monsters',
    'fiveApi.docs.mountsVehicles',
    'fiveApi.docs.races',
    'fiveApi.docs.skillsAbilities',
    'fiveApi.docs.spells',
    'fiveApi.docs.toolsTrinkets',
    'fiveApi.docs.traits',
    'fiveApi.docs.traps',
    'fiveApi.docs.weaponsArmor'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('docs', {
        url: '/docs',
        templateUrl: 'app/docs/docs.html',
        controller: 'DocsCtrl as docs'
      });
  })
  .controller('DocsCtrl', [function () {

  }]);