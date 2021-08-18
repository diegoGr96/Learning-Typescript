(() => {


    // const numbers:(number | string | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

    // numbers.push(true);

    console.log(numbers);


    const villian = ['Superman', 'Spiderman', 'Batman'];

    numbers.forEach( n => console.log(n.toFixed(1)));
    villian.forEach( v => console.log(v.toUpperCase()) );



})()