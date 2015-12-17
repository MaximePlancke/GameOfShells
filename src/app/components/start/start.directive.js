(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .directive('start', start);

  /** @ngInject */
  function start($timeout, $log, toastr, SETTINGS, services) {
    var directive = {
      restrict: 'A',
      scope: {
          cups: '=',
          playing: '='
      },
      link: function(scope, element) { 
        element.bind('click', function() {
          var cupsElements = angular.element(document.getElementsByClassName('cup'));
          var random1, random2, left1, left2 = 0;
          var cup1, cup2;
          var loops = SETTINGS.LOOPS;
          var maxIdx = SETTINGS.CUPS -1;
          var speed = SETTINGS.SPEED;
          var minIdx = 0;

          cupsElements.addClass('ready');
          $timeout(function(){
            scope.playing = true;
            for (var i = 1; i <= loops; i++) {
              shuffle(i, minIdx, maxIdx);
            }
          }, 500);

          function shuffle(i, min, max){
            $timeout(function(){
              random1 = services.getRandom(min, max);
              random2 = services.getRandom(min, max, random1);
              if(random1 != random2){ 
                cup1 = angular.element(cupsElements[random1]);
                cup2 = angular.element(cupsElements[random2])
                left1 = cup1.css('left');
                left2 = cup2.css('left');
                cup1.css('left',left2);
                cup2.css('left',left1);  
              }
              if(i == loops){
                $timeout(function(){
                  toastr.info('Pick one');
                  scope.playing = false;
                }, 500);
              }
            }, i*speed);
          }
        });
      }
    };

    return directive;
  }

})();
