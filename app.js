"use strict";
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
