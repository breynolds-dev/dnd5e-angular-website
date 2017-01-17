'use strict';

angular
  .module('fiveApi', [
    'ui.router',
    'fiveApi.home',
    'fiveApi.docs',
    'fiveApi.components'
  ]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  });
