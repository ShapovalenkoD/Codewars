// My solution
class Hero {
    constructor (name) {
        this.name = name || 'Hero'
        this.position = '00',
        this.health = 100,
        this.damage = 5,
        this.experience = 0
    }
}

// Top solution
function Hero (name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}

// Cleaver solution
class Hero {

    constructor(name = 'Hero'){

        Object.assign(this, {
            name       : name,
            position   : '00',
            health     : 100,
            damage     : 5,
            experience : 0,
        });

    }

}