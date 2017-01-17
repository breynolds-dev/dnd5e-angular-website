describe('fiveApi.docs.races', function() {
  var $controller;

  beforeEach(module('fiveApi.apiService'));
  beforeEach(module('fiveApi.docs'));
  beforeEach(module('fiveApi.docs.races'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('State', function () {
    var $state,
      $rootScope,
      state = 'docs.races';

    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;

      $templateCache.put('app/docs/docs.html', '');
      $templateCache.put('app/docs/races/races.html', '');
    }));

    it('should respond to URL', function() {
      expect($state.href(state)).toEqual('#/docs/races');
    });

    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('Controller', function() {
    var DocsRacesController;

    beforeEach(function() {
      DocsRacesController = $controller('DocsRacesController', { });
    });

    it('should be defined', function() {
      expect(DocsRacesController).toBeDefined();
    });

    describe('loadApiData()', function () {
      var $httpBackend, result;
      var baseUrl = 'http://www.5e-api.com/v1/'

      beforeEach(inject(function (_$httpBackend_) {
        result = {};
        $httpBackend = _$httpBackend_;
      }))

      afterEach(inject(function ($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      }));

      it('should load an array of JSON objects in raceIndex', function () {
        var apiRaceIndex = [
          { "name": "Dragonborn" },
          { "name": "Dark Elf" },
          { "name": "Mountain Dwarf" },
          { "name": "Human" },
          { "name": "Tiefling" }
        ]

        $httpBackend.whenGET(baseUrl + 'races')
          .respond(apiRaceIndex);
        $httpBackend.flush();

        expect(DocsRacesController.raceIndex.length).toEqual(5);
        expect(DocsRacesController.raceIndex[0].name).toEqual('Dragonborn');
      })

      it('should load a JSON objects in raceDetails', function () {
        var apiRaceDragonborn = {
          "name": "Elf",
          "subrace": "Dark Elf"
        }

        $httpBackend.whenGET(baseUrl + 'races/elf/dark-elf')
          .respond(apiRaceDragonborn);

        $httpBackend.flush();

        expect(DocsRacesController.raceDetails.name).toBe('Elf');
        expect(DocsRacesController.raceDetails.subrace).toBe('Dark Elf');
      })
    })
  });
});