'use strict';

angular
  .module('fiveApi', [
    'ui.router',
    'fiveApi.home',
    'fiveApi.docs',
    'fiveApi.docs.introduction'
  ]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  });
