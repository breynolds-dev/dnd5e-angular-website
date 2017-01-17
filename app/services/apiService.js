angular
  .module('fiveApi.apiService', [])
  .service('ApiService', function ($http) {
    var apiService = this;
    var baseUrl = 'http://www.5e-api.com/v1/'
    // var baseUrl = 'http://localhost:3000/v1/'

    apiService.getRaces = function () {
      return $http.get(baseUrl + "races");
    }

    apiService.getRace = function (race, subrace) {
      var raceName = race.toLowerCase().replace(' ', '-');
      var subraceName;
      if (subrace) {
        subraceName = subrace.toLowerCase().replace(' ', '-');
        return $http.get(baseUrl + 'races/' + raceName + '/' + subraceName);
      } else {
        return $http.get(baseUrl + 'races/' + raceName);
      }
    }
  });