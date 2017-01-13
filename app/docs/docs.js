'use strict';

angular
  .module('fiveApi.docs', [
    'ui.router'
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