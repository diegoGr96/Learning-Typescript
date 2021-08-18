(() => {


    let avenger:any = 123;

    avenger = 'Dr. Strange';
    console.log((avenger as string).charAt(0));
    
    avenger = 17.48;
    console.log(<number>avenger.toFixed(1));



})()