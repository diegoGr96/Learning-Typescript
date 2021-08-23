(() => {

    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironMan: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuite'
    };

    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    };

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };


    const avengers: Avenger[] = [ironMan, captainAmerica, thor];

    for (const avenger of avengers) {
        console.log(avenger);
    }

})()