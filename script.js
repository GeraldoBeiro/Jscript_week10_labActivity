/*Georgian College
COMP1073-24F-13155: 24F Client-Side JavaScript - 200
Student: Geraldo Beiro
Student Id: 200587023
*/

console.log('LAB WEEK 10 - JAVASCRIPT')
console.log('------------------------')

class CarCl {
    constructor(brand, speed) { //Here I am adding the constructor to work with two parameters (brand and speed).
        this.brand = brand;
        this.speed = speed;
    }

    accelerate() { // here I have the functon to accelerate the car
        this.speed += 12;
        console.log('After acceleration car '+`${this.brand} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 7;
        console.log('After pressing the breaks, car '+`${this.brand} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6; // Here I have the formula of the speed in miles/hour
    }

    set speedUS(speed) {
        this.speed = speed * 1.6; //And now the setter converting to km/hour
    }
}


const car1 = new CarCl('Ford', 120); // Here I am assigning the brand of the car and speed for it (parameters)
console.log('The car ir running at '+car1.speedUS+' miles per hour'); // converting 120 km/h to miles/h = 75miles/Hour.
car1.accelerate(); // increases speed by 10 km/h
car1.brake(); // decreases speed by 5 km/h
car1.speedUS = 50; // sets speed to 50 mi/h in km/h
console.log(car1); // check updated speed in km/h


class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`); // function accelerate to accelerate the car in 10km/h
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`); //function to decrease the speed of the car in 5km/h
    }
}


// This is the class I created tos extend from the class Car
class EV extends Car {
    constructor(brand, speed, charge) {
        super(brand, speed);
        this.charge = charge;
    }


    chargeBattery(chargeTo) {
        this.charge = chargeTo; //define the battery charge
    }

    accelerate() {
        this.speed += 20; // increase speed by 20km/h
        this.charge -= 1; // decreases battery 1%
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}


const elon_tesla = new EV('Tesla', 120, 23); //Here we have the const(object) built with the parameters brand, speed and charge
elon_tesla.accelerate(); // speed + 20km/h and battery is -1%
elon_tesla.brake(); // brake method for Class Car extended to EV (electrit vehicle)
elon_tesla.chargeBattery(90); // Sets charge to 90%
console.log(elon_tesla); // displays the state of the tesla car.
