(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('game', {
        url: '/',
        templateUrl: 'app/game/game.html',
        controller: 'GameController',
        controllerAs: 'game'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
