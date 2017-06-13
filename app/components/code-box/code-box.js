"use strict";

angular
  .module('fiveApi.components.codeBox', [])
  .component('codeBox', {
    bindings: {
      name: '@',
      content: '@'
    },
    template: '<div class="card grey lighten-4">' +
      '<div class="card-content">' +
        '<pre id="{{ $ctrl.name }}" name="{{ $ctrl.name }}" class="code">{{ $ctrl.content }}</pre>' +
      '</div>' +
    '</div>'
    // controller: 'CodeBoxController'
  })
  // .controller('CodeBoxController', function () {
  //
  // });