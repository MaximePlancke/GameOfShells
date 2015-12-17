(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .directive('reset', reset);

  /** @ngInject */
  function reset($timeout, $log, toastr, SETTINGS, services) {
    var directive = {
      restrict: 'A',
      scope: {
          cups: '=',
          playing: '=',
          ball: '='
      },
      link: function(scope, element) { 

        var maxIdx = SETTINGS.CUPS - 1;
        var minIdx = 0;

        element.bind('click', function() {
          resetBoard();
          resetBall(minIdx, maxIdx);
        });

        function resetBoard() {
          scope.playing = false;
          var cupsElements = angular.element(document.getElementsByClassName('cup'));
          angular.forEach(cupsElements, function(cup, key) {
            angular.element(cup).css('left', (scope.cups[key].left)+'px');
          });
          cupsElements.removeClass('ready');
        }

        function resetBall(min, max){
          angular.forEach(scope.cups, function(cup) {
            cup.ball = false;
          });
          scope.$apply(function () {
            scope.ball = services.getBall(services.getRandom(min, max));
          });
          scope.cups[scope.ball.id].ball = true;
        }

      }
    };

    return directive;

  }

})();