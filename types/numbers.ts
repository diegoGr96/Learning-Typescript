(()=>{


    let avengers:number = 10;

    console.log(avengers);

    const villians:number = 20;

    if(avengers < villians){
        console.log(`We're in troubles`);
    }else{
        console.log(`We're save`);
    }

    avengers = Number('55A');
    console.log({avengers});

})()