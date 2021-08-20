(() => {


    const fullName = (firstName:string, lastName?:string, upper:boolean = false):string => {
        let result:string = `${firstName} ${lastName || 'no last name'}`;

        if(upper) result = result.toUpperCase();
        else result = result.toLowerCase();

        return result;
    }

    console.log(fullName('Diego', 'García'));


})()