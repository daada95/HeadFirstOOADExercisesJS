/* step one: focus on the app doing what the customer wants
here, I will re-write the search method to return all the matching guitars instead of one 

update: new class GuitarSpec to encapsulate the guitar spec outside of Guitar object and
divide the functionality between Guitar and GuitarSpec objects */

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

  constructor(builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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

  search(guitarSpec: GuitarSpec) {
    var matchingGuitars = [];
    var builderFit = [];

    if (guitarSpec.getBuilder() !== '') {
      for (let i = 0; i < this.guitars.length; i++) {
        if (guitarSpec.getBuilder() !== null && this.guitars[i].guitarSpec.getBuilder() === guitarSpec.getBuilder()) {
          builderFit.push(this.guitars[i]);
        }
      }
    } else if (guitarSpec.getBuilder() === '') {
      builderFit = [...this.guitars];
    }

// as model is a "string" type, I use toLowerCase() to make sure if statement catches the model irrespective of case
    var modelFit = [];
    
    if (guitarSpec.getModel() !== '') {
      if (builderFit.length > 0) {
        for (let j = 0; j < builderFit.length; j++) {
          if (guitarSpec.getModel().toLowerCase() !== null
          && builderFit[j].guitarSpec.getModel().toLowerCase() === guitarSpec.getModel().toLowerCase()) {
            modelFit.push(builderFit[j]);
          }
        }
      }
    } else if (guitarSpec.getModel() === '') {
      modelFit = [...builderFit];
    }

    var typeFit = [];

    if (guitarSpec.getType() !== '') {
      if (modelFit.length > 0) {
        for (let k = 0; k < modelFit.length; k++) {
          if (guitarSpec.getType() !== null && modelFit[k].guitarSpec.getType() === guitarSpec.getType()) {
            typeFit.push(modelFit[k]);
          }
        }
      }
    } else if (guitarSpec.getType() === '') {
      typeFit = [...modelFit];
    }

    var backWoodFit = [];

    if (guitarSpec.getBackWood() !== '') {
      if (typeFit.length > 0) {
        for (let m = 0; m < typeFit.length; m++) {
          if (guitarSpec.getBackWood() !== null && typeFit[m].guitarSpec.getBackWood() === guitarSpec.getBackWood()) {
            backWoodFit.push(typeFit[m]);
          }
        }
      }
    } else if (guitarSpec.getBackWood() === '') {
      backWoodFit = [...typeFit];
    }

    var topWoodFit = [];

    if (guitarSpec.getTopWood() !== '') {
      if (backWoodFit.length > 0) {
        for (let n = 0; n < backWoodFit.length; n++) {
          if (guitarSpec.getTopWood() !== null && backWoodFit[n].guitarSpec.getTopWood() === guitarSpec.getTopWood()) {
            topWoodFit.push(backWoodFit[n]);
          }
        }
      }
    } else if (guitarSpec.getTopWood() === '') {
      topWoodFit = [...backWoodFit];
    }

    if (topWoodFit.length > 0) {
      matchingGuitars = [...topWoodFit];
      return matchingGuitars;
    } else {
      return '- Sorry Erin, nothing fits your request.';
    }
  }
}

let inventory = new Inventory([]);
let stratocaster = new GuitarSpec(Builder.FENDER, 'Stratocaster', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
let jaguar = new GuitarSpec(Builder.FENDER, 'Jaguar', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
inventory.addGuitar(95693, 1499.95, stratocaster);
inventory.addGuitar(95612, 1549.95, stratocaster);
inventory.addGuitar(95694, 1350.95, jaguar);

let whatErinLikes = new GuitarSpec(Builder.FENDER, '', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
let whatErinCanGet = () => {
  console.log('Hi Erin, here are your options: ');
  console.log(inventory.search(whatErinLikes))
};

whatErinCanGet();