// expected result: skeleton class Airplane with variable speed and methods getSpeed(), setSpeed()

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