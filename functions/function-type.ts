(() => {


    const addNumbers = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hello ${name}`;
    const saveTheWorld = ():string => `The world is saved!`;
    
    /**
    * * 'Better comments' What a nice extension 
    */
    //!
    //?
    //*
    //TODO

    let myfunction: (y:number, z:number) => number;

    //! BAD
    myfunction = 10;
    console.log(myfunction);

    //*Correct
    myfunction = addNumbers;
    console.log(myfunction(1, 2));

    //! BAD
    myfunction = greet
    console.log(myfunction('Diego'));

    //! BAD
    myfunction = saveTheWorld
    console.log(myfunction());

})()