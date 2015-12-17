(function() {
  'use strict';

  angular
    .module('onFidoGame')
    .factory('services', services);

  /** @ngInject */
  function services(SETTINGS) {

    function model(){
      var cups = [];
      var ball = getBall(SETTINGS.BALL_START_POSITION);
      
      for (var i = 0; i < SETTINGS.CUPS; i++) {
        cups.push({
          id: i + 1, 
          ball: false, 
          left: (i * SETTINGS.WIDTH_SECTION) + ((SETTINGS.WIDTH_SECTION - 200) / 2)
        });
      }
      cups[SETTINGS.BALL_START_POSITION].ball = true;
      return {cups: cups, ball: ball};
    }

    function getRandom(min, max, except){
      var exceptNumber = except || 999999;
      var random = Math.floor(Math.random() * (max - min +1)) + min;
      if(random == exceptNumber){
        return getRandom(min, max, exceptNumber);
      } else {
        return random;
      }
    }

    function getBall(id){
      return {
        id: id,
        left: (id * SETTINGS.WIDTH_SECTION) + ((SETTINGS.WIDTH_SECTION - 50) / 2)
      }; 
    }

    var service = {
      model: model,
      getRandom: getRandom,
      getBall: getBall
    };

    return service;

  }
})();
