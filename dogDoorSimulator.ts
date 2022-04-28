/* an exercise related to dougDogDoors.ts - a dog door simulator
which tests one of the alternative use cases when the dog doesn't
come back home before the door automatically closes */

import { Remote, DogDoor } from './dougDogDoors';

let fidosDoor = new DogDoor;
let toddsRemote = new Remote(fidosDoor);

console.log("'Woof, woof!'. Fido barks at the door.");
console.log('Todd presses the button to open the dog door');
toddsRemote.pressButton();
console.log('Fido goes outside and fulfills his needs.');
setTimeout(() => {
  console.log("Oh no, Fido is stuck. He's barking outside.");
  console.log("Todd presses the button to let Fido in.");
  toddsRemote.pressButton();
  console.log('Fido comes home.');
}, 10000);