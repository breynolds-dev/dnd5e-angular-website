'use strict';

angular
  .module('fiveApi', [
    'ui.router',
    'fiveApi.home',
    'fiveApi.docs'
  ]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  });
