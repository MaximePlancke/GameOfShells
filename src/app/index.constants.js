(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .constant('SETTINGS', {
      'WIDTH_SECTION': 200, 
      'CUPS': 3,
      'LOOPS': 8,
      'SPEED': 400,
      'BALL_START_POSITION': 1
    });

})();
