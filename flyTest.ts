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

// @ts-ignore
class Airplane {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }
  
  getSpeed() {
    return this.speed;
  }

  setSpeed(newSpeed: number) {
      this.speed = newSpeed;
  }
}

// @ts-ignore
class Jet extends Airplane {
  multiplier: number;
  speed: number;

  constructor(speed: number) {
    super(speed);
    this.multiplier = 2;
  }
  
  setSpeed(newSpeed: number) {
    this.speed = newSpeed * this.multiplier;
  }
  
  accelerate() {
    super.setSpeed(super.getSpeed() * 2);
  }
}

let biplane = new Airplane(212);
console.log("Biplane's speed: " + biplane.getSpeed());

let boeing = new Jet(0);
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