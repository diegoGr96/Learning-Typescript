"use strict";
(function () {
    var ValidQualifications;
    (function (ValidQualifications) {
        ValidQualifications[ValidQualifications["one"] = 1] = "one";
        ValidQualifications[ValidQualifications["two"] = 2] = "two";
        ValidQualifications[ValidQualifications["three"] = 3] = "three";
        ValidQualifications[ValidQualifications["four"] = 4] = "four";
        ValidQualifications[ValidQualifications["five"] = 5] = "five";
        ValidQualifications[ValidQualifications["six"] = 6] = "six";
        ValidQualifications[ValidQualifications["seven"] = 7] = "seven";
        ValidQualifications[ValidQualifications["eight"] = 8] = "eight";
        ValidQualifications[ValidQualifications["nine"] = 9] = "nine";
        ValidQualifications[ValidQualifications["ten"] = 10] = "ten";
    })(ValidQualifications || (ValidQualifications = {}));
    ;
    var qualification = ValidQualifications.five;
    console.log(qualification);
    console.log(ValidQualifications);
})();
