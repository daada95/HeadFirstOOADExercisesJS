/* additional functionality - a "bark recognizer" to open the door automatically
when the dog barks

I went a little beyond and created a dog class instead of mocking dog behavior
*/

import { DogDoor } from "./dougDogDoors";

export class BarkRecognizer {
  door: DogDoor;
  
  constructor(door: DogDoor) {
    this.door = door;
  }
  
  recognize(bark: Bark) {
    console.log(`RECOGNIZER: I\'ve heard \"${bark.sound}\".`)
    if (this.door.allowedBark.equals(bark.sound)) {
      console.log('--> Dog recognized. <--');
      this.door.openUp();
    }
    else {
      console.log('--> Bark recognizer doesn\'t recognize this dog. <--');
    }
  }
}

export class Bark {
  sound: string;
  
  constructor(sound: string) {
    this.sound = sound;
  }
  
  getSound() {
    return this.sound;
  }
  
  equals(bark: Bark['sound']) {
    if (this.sound.toLowerCase() === bark.toLowerCase()) {
      return true;
    }
    else {
      return false;
    }
  }
}

/* export class Dog {
  barkRecognizer: BarkRecognizer;
  name: string;
  inside: boolean;

  constructor(name: string, barkRecognizer: BarkRecognizer) {
    this.name = name;
    this.barkRecognizer = barkRecognizer;
    this.inside = true;
  }

  goHome(dogDoor: DogDoor) {
    if (!this.inside) {
      if (dogDoor.isOpen()) {
        console.log(`${this.name} comes in.`);
        this.inside = true;
      }
      else {
        console.log(`Door is closed, sorry!`);
      }
    }
    else {
      console.log(`${this.name} is at home already.`);
    }
  }

  goOutside(dogDoor: DogDoor) {
    if (this.inside) {
      if (dogDoor.isOpen()) {
        console.log(`${this.name} goes outside.`);
        this.inside = false;
      }
      else {
        console.log(`Door is closed, sorry!`);
      }
    }
    else {
      console.log(`${this.name} is already out.`);
    }
  }

  wantsOut(bark: string) {
    if (this.inside) {
      console.log(`${this.name} wants to go out: ${bark}!`);
      this.barkRecognizer.recognize(bark);
    }
    else {
      console.log(`${this.name} is not at home.`);
    }
  }

  wantsIn(bark: string) {
    if (!this.inside) {
      console.log(`${this.name} wants to come in: ${bark}!`);
      this.barkRecognizer.recognize(bark);
    }
    else {
      console.log(`${this.name} is not outside.`);
    }
  }
} */