/* chapter about requirements solicitation - we're creating a dog door
and implementing the changes the customer wants - e.g., a timer to close
the door automatically after some time
*/

export class DogDoor {
  open: boolean;

  constructor() {
    this.open = false;
  }

  openUp() {
    if (this.open) {
      console.log('Dog door is already open.');
    } 
    else {
      console.log('The dog door opens.');
      this.open = true;
    }
  }

  close() {
    if (this.open) {
      console.log('The dog door closes.')
      this.open = false;
    }
  }

    isOpen() {
        return this.open;
    }
}

export class Remote {
  door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  pressButton() {
    console.log('Pressing the remote control button ...');
    if (this.door.isOpen()) {
      this.door.close();
    }
    else {
      this.door.openUp();
      setTimeout(() => {
        this.door.close();
      }, 5000);
    }
  }
}