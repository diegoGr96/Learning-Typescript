"use strict";
(function () {
    // const numbers:(number | string | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // numbers.push(true);
    console.log(numbers);
    var villian = ['Superman', 'Spiderman', 'Batman'];
    numbers.forEach(function (n) { return console.log(n.toFixed(1)); });
    villian.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
