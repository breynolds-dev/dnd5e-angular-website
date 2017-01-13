'use strict';

angular.module('fiveApi.docs.backgrounds', [])
  .controller('DocsBackgroundsController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.backgrounds', {
        url: '/backgrounds',
        templateUrl: 'app/docs/backgrounds/backgrounds.html',
        controller: 'DocsBackgroundsController'
      });
  });