'use strict';

angular.module('fiveApi.docs.skillsAbilities', [])
  .controller('DocsSkillsAbilitiesController', function() {
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('docs.skillsAbilities', {
        url: '/skills-abilities',
        templateUrl: 'app/docs/skills-abilities/skills-abilities.html',
        controller: 'DocsSkillsAbilitiesController'
      });
  });