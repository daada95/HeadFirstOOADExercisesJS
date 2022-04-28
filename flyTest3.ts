/* theme: encapsulation of data
for Jet class, when we use a setter method to set speed, the input gets multiplied by 2
however, when we set the speed by accessing the object with dot notation, the multiplier is not applied

Concorde: input speed of 2179 in setter method, output speed of 4358 (as expected, multiplier worked)
Honda Jet: input speed of 778 via dot notation, output speed of 778 (wrong)

notes to self:
1. encapsulation protects data integrity
2. setter/getter functions are a fine way to implement it in JS
*/

import { Airplane } from './airplaneClass';
import { Jet } from './flyTest';

let concorde = new Jet(2179);
concorde.setSpeed(2179);

let hondaJet = new Jet(778);
hondaJet.speed = 778;

console.log("Concorde's speed: " + concorde.speed);
console.log("HondaJet's speed: " + hondaJet.speed);