class vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }

}

class car extends vehicle {
    constructor(make, model, year) {

    super(make, model, year);
    this.numWheels = 4;

    }

}

class motorcycle extends vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOOM';
    }
}

class garage {
    constructor(space){
        if(space === undefined || space <= 0){
            throw 'garage must be able to function as a garage';
        }
        this.space = space;
        this.count = 0;
        this.vehicles = [];
         
    }

    add(auto) {
        if(!(auto instanceof vehicle)){
            throw 'must be a vehicle to park in the garage!';
        }
        if( this.count >= this.space){
            throw 'Garage is full';
        }
        this.vehicles.push(auto);
        this.count++;
        return this.vehicles;

    }
}