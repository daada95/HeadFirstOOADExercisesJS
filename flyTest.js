/* theme: inheritance/polymorphism

expected result printed in the console:
212
844
1688
6752
13504
27008
1696
*/

class Airplane {
    constructor(speed) {
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(newSpeed) {
        if (isNaN(newSpeed)) {
            console.log("Parameter is invalid. Please set speed to a number.")
        } else {
            this.speed = newSpeed;
        }
    }
}

class Jet extends Airplane {
  constructor(multiplier, speed) {
    super(speed);
    this.multiplier = 2;
  }

  setSpeed(newSpeed) {
    if (isNaN(newSpeed)) {
      console.log("Invalid argument. Please provide a number.");
    } else {
      super.setSpeed(newSpeed * this.multiplier);
    }
  }

  accelerate() {
    super.setSpeed(super.getSpeed() * 2);
  }
}

let biplane = new Airplane();
biplane.setSpeed(212);
console.log("Biplane's speed: " + biplane.getSpeed());

let boeing = new Jet();
boeing.setSpeed(422);
console.log("Boeing's speed: " + boeing.getSpeed());

let x = 0;

while (x < 4) {
  boeing.accelerate();
  console.log("Current speed of boeing: " + boeing.getSpeed());
  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2);
  } else {
    boeing.accelerate();
  }
  x++;
}

console.log(biplane.getSpeed());