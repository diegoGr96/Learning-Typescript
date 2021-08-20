


(() => {


    //Never indicate that could finish the funcion throwing an error, so it could finish correctly or not.
    //In case not, it will throw an exception and the program will stop there
    const error = (msg:string):(never|number) => {

        //Change this between true and false to see the differences
        if(false){
            throw new Error(msg);
        }

        return 1;
    };

    error('hello!!!!');
    console.log('Arrive here?');

})()