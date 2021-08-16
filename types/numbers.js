"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("We're in troubles");
    }
    else {
        console.log("We're save");
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
