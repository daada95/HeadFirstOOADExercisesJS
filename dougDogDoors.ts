/* chapter about requirements solicitation - we're creating a dog door
and implementing the changes the customer wants - e.g., a timer to close
the door automatically after some time, bark recognizer, and so on
*/

import { Bark } from "./barkRecognizer";

export class DogDoor {
  open: boolean;
  timeout: number;
  allowedBark: Bark;

  constructor() {
    this.open = false;
    this.timeout = 5000;
  }

  openUp() {
    if (this.open) {
      console.log('Dog door is already open.');
    } 
    else {
      console.log('The dog door opens.');
      this.open = true;
      setTimeout(() => {
        this.close();
      }, this.timeout);
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

  changeTimeout(newTimeout: number) {
    console.log('DOG DOOR: new timeout was set: ' + (newTimeout / 1000) + 's.');
    this.timeout = newTimeout;
  }

  setAllowedBark(newBark: Bark) {
    console.log('DOG DOOR: new allowed bark set: ' + newBark.sound + '.');
    this.allowedBark = newBark;
  }

  getAllowedBark() {
    if (this.allowedBark) {
      console.log(this.allowedBark.sound);
    }
    else {
      console.log('DOG DOOR: no allowed bark yet.');
    }
  }
}

export class Remote {
  door: DogDoor;

  constructor(door: DogDoor) {
    this.door = door;
  }

  pressButton() {
    console.log('REMOTE CONTROL: pressing the button.');
    if (this.door.isOpen()) {
      this.door.close();
    }
    else {
      this.door.openUp();
    }
  }

  configureTimeout(newTimeout: number) {
    console.log('REMOTE CONTROL: new timeout sent to the door.');
    this.door.changeTimeout(newTimeout);
  }
}