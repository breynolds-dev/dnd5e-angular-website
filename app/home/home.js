'use strict';

angular
  .module('fiveApi.home', [
    'ui.router'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  })
  .controller('HomeCtrl', function () {

  });