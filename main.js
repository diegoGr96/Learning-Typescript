"use strict";
//Funciones Básicas
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
//Parametros por defecto
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman();
//Rest?
var unirHeroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(', ');
};
//Tipo funcion
var noHaceNada = function (numero, texto, booleano, arreglo) { };
//Crear el tipo de funcion que acepte la funcion 'noHaceNada'
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var heroPowers;
    (function (heroPowers) {
        heroPowers[heroPowers["aquaman"] = 0] = "aquaman";
        heroPowers[heroPowers["batman"] = 1] = "batman";
        heroPowers[heroPowers["flash"] = 5] = "flash";
        heroPowers[heroPowers["superman"] = 100] = "superman";
    })(heroPowers || (heroPowers = {}));
    ;
    var fuerzaFlash = heroPowers.aquaman;
    var fuerzaSuperman = heroPowers.batman;
    var fuerzaBatman = heroPowers.flash;
    var fuerzaAcuaman = heroPowers.superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    var largoDelPoder2 = poder.length;
    console.log(largoDelPoder);
    console.log(largoDelPoder2);
})();
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
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || 'no last name');
    };
    console.log(fullName('Diego'));
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    console.log(fullName('Diego', 'García'));
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    console.log(fullName('Diego', 'García', 'Ruano', 'another'));
})();
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
(function () {
    var avenger = 123;
    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0));
    avenger = 17.48;
    console.log(avenger.toFixed(1));
})();
(function () {
    // const numbers:(number | string | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // numbers.push(true);
    console.log(numbers);
    var villian = ['Superman', 'Spiderman', 'Batman'];
    numbers.forEach(function (n) { return console.log(n.toFixed(1)); });
    villian.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperMan = true;
    var isBatman = false;
    isSuperMan = (5 < 4) ? true : false;
    console.log({ isSuperMan: isSuperMan });
    console.log({ isBatman: isBatman });
})();
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
(function () {
    //Never indicate that could finish the funcion throwing an error, so it could finish correctly or not.
    //In case not, it will throw an exception and the program will stop there
    var error = function (msg) {
        //Change this between true and false to see the differences
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    error('hello!!!!');
    console.log('Arrive here?');
})();
(function () {
    //strictNullChecks
    var und = undefined;
    und = false;
    console.log(und);
    var nu = null;
    console.log(nu);
})();
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
(function () {
    var _a, _b;
    var BATMAN = 'Batman';
    console.log("I'm " + BATMAN);
    console.log(BATMAN.toUpperCase());
    console.log((_b = (_a = BATMAN[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : 'No se encontró.');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    console.log(hero);
})();
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
//# sourceMappingURL=main.js.map