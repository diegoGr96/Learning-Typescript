


(() => {


    const hero:string = 'Flash';

    function getName():string {
        return hero;
    }

    const activateBatSignal = ():string => {
        return 'Bat-Signal Activated!';
    }

    console.log(activateBatSignal());

    const heroName:string = getName();


})()