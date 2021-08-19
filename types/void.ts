(() => {


    function callBatman():void{
        console.log('Hi Batman');
    }

    const a = callBatman();
    console.log(a);



    const callSuperman = (number:number):void => console.log('Hi Superman!' + number);

    const b = callSuperman(1);
    console.log(b);


})()