(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .controller('GameController', GameController);

  /** @ngInject */
  function GameController($log, services) {
    var vm = this;


    // You can modify some of the settings in the constants file //

    vm.playing = false;
    vm.ball = services.model().ball;
    vm.cups = services.model().cups;

  }
})();
