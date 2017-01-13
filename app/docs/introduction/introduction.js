'use strict';

angular.module('fiveApi.docs.introduction', [])
  .controller('DocsIntroductionController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.introduction', {
        url: '/introduction',
        templateUrl: 'app/docs/introduction/introduction.html',
        controller: 'DocsIntroductionController'
      });
  });