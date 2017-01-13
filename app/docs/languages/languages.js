'use strict';

angular.module('fiveApi.docs.languages', [])
  .controller('DocsLanguagesController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.languages', {
        url: '/languages',
        templateUrl: 'app/docs/languages/languages.html',
        controller: 'DocsLanguagesController'
      });
  });