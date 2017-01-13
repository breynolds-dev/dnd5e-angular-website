'use strict';

angular.module('fiveApi.docs.feats', [])
  .controller('DocsFeatsController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.feats', {
        url: '/feats',
        templateUrl: 'app/docs/feats/feats.html',
        controller: 'DocsFeatsController'
      });
  });