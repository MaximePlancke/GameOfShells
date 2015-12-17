(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .directive('chooseCup', chooseCup);

  /** @ngInject */
  function chooseCup($timeout, $log, toastr, SETTINGS, services) {
    var directive = {
      restrict: 'A',
      scope: {
          cup: '=',
          playing: '=',
          ball: '='
      },
      link: function(scope, element) { 
        element.bind('click', function() {
          if(!scope.playing){
            var cupElements = angular.element(document.getElementsByClassName('cup'));
            var cupSelected = angular.element(cupElements[scope.cup.id-1]);
            cupSelected.removeClass('ready');
            if(scope.cup.ball == true){
              var left = parseInt(cupSelected.css('left'), 10);
              var position = left / (SETTINGS.WIDTH_SECTION);
              scope.ball = services.getBall(position);
              toastr.info('You win :)');
            } else {
              toastr.info('You lost ! Sorry');
            }
          } else {
            toastr.info('The suffle is not done');
          }
        });
      }
    };

    return directive;

  }

})();
