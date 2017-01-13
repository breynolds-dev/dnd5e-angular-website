describe('fiveApi.apiService', function () {
  var apiService;

  beforeEach(module('fiveApi.apiService'));
  beforeEach(inject(function (_ApiService_) {
    apiService = _ApiService_;
  }));

  it('should exist', function () {
    expect(apiService).toBeDefined();
  });

  describe('getRaces', function () {
    var $httpBackend, apiService, result;

    beforeEach(inject(function (_$httpBackend_, _ApiService_) {
      result = {};
      $httpBackend = _$httpBackend_;
      apiService = _ApiService_;
    }))

    afterEach(inject(function ($httpBackend) {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should grab an array of JSON objects', function () {
      var apiRaceIndex = [
        { "name": "Dragonborn" },
        { "name": "Dark Elf" },
        { "name": "Mountain Dwarf" },
        { "name": "Human" },
        { "name": "Tiefling" }
      ]

      $httpBackend.whenGET('http://www.5e-api.com/v1/races')
        .respond(apiRaceIndex);

      apiService.getRaces()
        .then(function (res) {
          result = res.data;
        });

      $httpBackend.flush();

      expect(result.length).toBe(5);
      expect(result[0].name).toEqual('Dragonborn');
    })
  })

  describe('getRace', function () {
    var $httpBackend, apiService, result;

    beforeEach(inject(function (_$httpBackend_, _ApiService_) {
      result = {};
      $httpBackend = _$httpBackend_;
      apiService = _ApiService_;
    }))

    afterEach(inject(function ($httpBackend) {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should grab a JSON race object without a subrace', function () {
      var apiRaceDragonborn = {
        "name": "Dragonborn",
        "subrace": null
      }

      $httpBackend.whenGET('http://www.5e-api.com/v1/races/dragonborn')
        .respond(apiRaceDragonborn);

      apiService.getRace('Dragonborn')
        .then(function (res) {
          result = res.data;
        });

      $httpBackend.flush();

      expect(result.name).toBe('Dragonborn');
      expect(result.subrace).toBe(null);
    })

    it('should grab a JSON race object with a subrace', function () {
      var apiRaceDragonborn = {
        "name": "Elf",
        "subrace": "Dark Elf"
      }

      $httpBackend.whenGET('http://www.5e-api.com/v1/races/elf/dark-elf')
        .respond(apiRaceDragonborn);

      apiService.getRace('Elf', 'Dark Elf')
        .then(function (res) {
          result = res.data;
        });

      $httpBackend.flush();

      expect(result.name).toBe('Elf');
      expect(result.subrace).toBe('Dark Elf');
    })
  })
});