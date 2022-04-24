/* step one: focus on the app doing what the customer wants
here, I will re-write the search method to return all the matching guitars instead of one 

update 1: new class GuitarSpec to encapsulate the guitar spec outside of Guitar object and
divide the functionality between Guitar and GuitarSpec objects

update 2: new guitarSpec property numStrings and new methods getNumStrings & compareSpecs
reduced a lot of repetitive code by delegating the spec comparison to guitarSpec object */

enum Strings {
  SIX = 6,
  TWELVE = 12
}

enum Builder {
  FENDER = 'Fender',
  MARTIN = 'Martin',
  GIBSON = 'Gibson',
  COLLINGS = 'Collings',
  OLSON = 'Olson',
  RYAN = 'Ryan',
  PRS = 'PRS',
  ANY = ''
}

enum Type {
  ACOUSTIC = 'Acoustic',
  ELECTRIC = 'Electric',
  ANY = ''
}

enum Wood {
  INDIAN_ROSEWOOD = 'Indian Rosewood',
  BRAZILIAN_ROSEWOOD = 'Brazilian Rosewood',
  MAHOGANY = 'Mahogany',
  MAPLE = 'Maple',
  COCOBOLO = 'Cocobolo',
  CEDAR = 'Cedar',
  ADIRONDACK = 'Adirondack',
  ALDER = 'Alder',
  SITKA = 'Sitka',
  ANY = ''
}

class Guitar {
  serialNumber: number;
  price: number;
  guitarSpec: GuitarSpec;

  constructor(serialNumber: number, price: number, guitarSpec: GuitarSpec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.guitarSpec = guitarSpec;
  }

  getSerialNumber() {
    return this.serialNumber;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getSpec() {
    return this.guitarSpec;
  }
}

class GuitarSpec {
  builder: Builder;
  model: string;
  type: Type;
  backWood: Wood;
  topWood: Wood;
  numStrings: Strings;

  constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood, numStrings: Strings) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
    this.numStrings = numStrings;
  }

  getBuilder() {
    return this.builder;
  }

  getModel() {
    return this.model;
  }

  getType() {
    return this.type;
  }

  getBackWood() {
    return this.backWood;
  }

  getTopWood() {
    return this.topWood;
  }

  getNumStrings() {
    return this.numStrings;
  }

  compareSpecs(customerSpec: GuitarSpec, comparisonSpec: GuitarSpec) {
    var match = true;
    Object.keys(customerSpec).forEach(i => {
      if (customerSpec[i] !== '') {
        if (customerSpec[i] !== comparisonSpec[i]) {
          match = false;
        }
      };
  
  })

    return match;
  }
}

class Inventory {
  guitars: Array<any>;

  constructor(guitars: Array<any>) {
    this.guitars = guitars;
  }

  addGuitar(serialNumber: number, price: number, guitarSpec: GuitarSpec) {
    var guitar = new Guitar(serialNumber, price, guitarSpec);
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: number) {
    for (let i = 0; i < this.guitars.length; i++) {
      if (this.guitars[i].getSerialNumber() === serialNumber) {
        return this.guitars[i];
      }
    }

    return null;
  }

  search(customerSpec: GuitarSpec) {
    var matchingGuitars = [];
    
    for (let i = 0; i < this.guitars.length; i++) {
      if (customerSpec.compareSpecs(customerSpec, this.guitars[i].guitarSpec)) {
        matchingGuitars.push(this.guitars[i]);
      }
    }

    if (matchingGuitars.length > 0) {
      return matchingGuitars;
    } else {
      return '- Sorry Erin, nothing fits your request.';
    }
  }
}

let inventory = new Inventory([]);
let stratocaster = new GuitarSpec(Builder.FENDER, 'Stratocaster', Type.ELECTRIC, Wood.ALDER, Wood.ALDER, Strings.SIX);
let jaguar = new GuitarSpec(Builder.FENDER, 'Jaguar', Type.ELECTRIC, Wood.ALDER, Wood.ALDER, Strings.SIX);
inventory.addGuitar(95693, 1499.95, stratocaster);
inventory.addGuitar(95612, 1549.95, stratocaster);
inventory.addGuitar(95694, 1350.95, jaguar);

let whatErinLikes = new GuitarSpec(Builder.FENDER, 'Stratocaster', Type.ELECTRIC, Wood.ALDER, Wood.ALDER, Strings.SIX);
let whatErinCanGet = () => {
  console.log('Hi Erin, here are your options: ');
  console.log(inventory.search(whatErinLikes))
};

whatErinCanGet();