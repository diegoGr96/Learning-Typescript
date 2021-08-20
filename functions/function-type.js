"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hello " + name; };
    var saveTheWorld = function () { return "The world is saved!"; };
    /**
    * * 'Better comments' What a nice extension
    */
    //!
    //?
    //*
    //TODO
    var myfunction;
    //! BAD
    myfunction = 10;
    console.log(myfunction);
    //*Correct
    myfunction = addNumbers;
    console.log(myfunction(1, 2));
    //! BAD
    myfunction = greet;
    console.log(myfunction('Diego'));
    //! BAD
    myfunction = saveTheWorld;
    console.log(myfunction());
})();
