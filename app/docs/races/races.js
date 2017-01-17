'use strict';

angular.module('fiveApi.docs.races', ['fiveApi.apiService'])
  .controller('DocsRacesController', function(ApiService) {
    var racesController = this;

    loadApiData();

    function loadApiData () {
      ApiService.getRaces()
        .then(function (result) {
          racesController.raceIndex = result.data;
        })

      ApiService.getRace('Dragonborn', '')
        .then(function (result) {
          racesController.raceDetails = result.data;
        })

      ApiService.getRace('Elf', '')
        .then(function (result) {
          racesController.raceSubraceOptions = result.data;
        })

      ApiService.getRace('Elf', 'Dark Elf')
        .then(function (result) {
          racesController.raceSubraceDetails = result.data;
        })
    }
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.races', {
        url: '/races',
        templateUrl: 'app/docs/races/races.html',
        controller: 'DocsRacesController as $ctrl'
      });
  });