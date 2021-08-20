(() => {


    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'no last name'}`;
    }

    console.log(fullName('Diego'));


})()