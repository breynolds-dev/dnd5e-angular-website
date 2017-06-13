'use strict';

angular
  .module('fiveApi', [
    'ui.router',
    'fiveApi.home',
    'fiveApi.docs',
    'fiveApi.components'
  ]).config(function($locationProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise("/home");
  });
