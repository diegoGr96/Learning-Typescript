"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        var result = firstName + " " + (lastName || 'no last name');
        if (upper)
            result = result.toUpperCase();
        else
            result = result.toLowerCase();
        return result;
    };
    console.log(fullName('Diego', 'García'));
})();
