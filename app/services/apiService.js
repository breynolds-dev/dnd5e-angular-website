angular
  .module('fiveApi.apiService', [])
  .service('ApiService', function ($http) {
    var apiService = this;

    apiService.getRaces = function () {
      return $http.get('http://www.5e-api.com/v1/races');
    }

    apiService.getRace = function (race, subrace) {
      var raceName = race.toLowerCase().replace(' ', '-');
      var subraceName;
      if (subrace) {
        subraceName = subrace.toLowerCase().replace(' ', '-');
        return $http.get('http://www.5e-api.com/v1/races/' + raceName + '/' + subraceName);
      } else {
        return $http.get('http://www.5e-api.com/v1/races/' + raceName);
      }
    }
  });