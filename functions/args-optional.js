"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'no last name');
    };
    console.log(fullName('Diego'));
})();
