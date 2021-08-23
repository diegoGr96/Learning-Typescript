(() => {


    class Avenger{

        name;
        power;

        constructor(name = 'No name', power = -1){
            this.name = name;
            this.power = power;
        }

        get getName(){
            return this.name;
        }

        set setName(name){
            this.name = name;
        }

    }


    class FlyingAvenger extends Avenger{

        flying;

        constructor(name, power){
            super(name, power);
            this.flying = true;
        }

    }


    const hulk = new Avenger('Hulk', 9001);
    const falcon = new FlyingAvenger('Falcon', 50);

    console.log(hulk);
    console.log(falcon.getName);
    
    falcon.setName = 'NEW Falcon';
    console.log(falcon.getName);

})()