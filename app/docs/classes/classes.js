'use strict';

angular.module('fiveApi.docs.classes', [])
  .controller('DocsClassesController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.classes', {
        url: '/classes',
        templateUrl: 'app/docs/classes/classes.html',
        controller: 'DocsClassesController'
      });
  });