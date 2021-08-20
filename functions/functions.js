"use strict";
(function () {
    var hero = 'Flash';
    function getName() {
        return hero;
    }
    var activateBatSignal = function () {
        return 'Bat-Signal Activated!';
    };
    console.log(activateBatSignal());
    var heroName = getName();
})();
