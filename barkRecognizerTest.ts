// a small snippet to test the new functionality - the bark recognizer

import { DogDoor } from './dougDogDoors';
import { BarkRecognizer, Bark} from './barkRecognizer';

let testOutTheRecognizer = () => {
  var bark = new Bark('woof woof');
  var newDoor = new DogDoor();
  var barkRecognizer = new BarkRecognizer(newDoor);

  console.log('The owners record the dog barking at the dog door.');
  newDoor.setAllowedBark(bark);
  
  console.log('Dog continues barking at the door.');
  barkRecognizer.recognize(bark);

  console.log('Dog goes out and takes care of his business.');

  setTimeout(() => {
    console.log('Dog barks at the door to come back home.');
    barkRecognizer.recognize(bark);
  
    console.log('Dog comes home.');
  }, 5000);
}

testOutTheRecognizer();