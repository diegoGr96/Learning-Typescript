

(() => {


    const BATMAN:string = 'Batman';


    console.log(`I'm ${BATMAN}`);
    console.log(BATMAN.toUpperCase());
    console.log(BATMAN[10]?.toUpperCase() ?? 'No se encontró.');


})()