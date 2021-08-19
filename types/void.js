"use strict";
(function () {
    function callBatman() {
        console.log('Hi Batman');
    }
    var a = callBatman();
    console.log(a);
    var callSuperman = function (number) { return console.log('Hi Superman!' + number); };
    var b = callSuperman(1);
    console.log(b);
})();
