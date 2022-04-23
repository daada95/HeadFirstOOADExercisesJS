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