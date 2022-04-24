/* step one: focus on the app doing what the customer wants
here, I will re-write the search method to return all the matching guitars instead of one */

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
  builder: Builder;
  model: string;
  type: Type;
  backWood: Wood;
  topWood: Wood;

  constructor(serialNumber: number, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.builder = builder;
    this.model = model;
    this.type = type;
    this.backWood = backWood;
    this.topWood = topWood;
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

  addGuitar(serialNumber: number, price: number, builder: Builder, model: string, type: Type, backWood: Wood, topWood: Wood) {
    var guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
    this.guitars.push(guitar);
  }

  getGuitar(serialNumber: number) {
    for (let i = 0; i < this.guitars.length; i++) {
      if (this.guitars[i]['serialNumber'] === serialNumber) {
        return this.guitars[i];
      }
    }

    return null;
  }

  search(Guitar: Guitar) {
    var matchingGuitars = [];
    var builderFit = [];

    if (Guitar.getBuilder() !== '') {
      for (let i = 0; i < this.guitars.length; i++) {
        if (Guitar.getBuilder() !== null && this.guitars[i]['builder'] === Guitar.getBuilder()) {
          builderFit.push(this.guitars[i]);
        }
      }
    } else if (Guitar.getBuilder() === '') {
      builderFit = [...this.guitars];
    }

// as model is a "string" type, I use toLowerCase() to make sure if statement catches the model irrespective of case
    var modelFit = [];
    
    if (Guitar.getModel() !== '') {
      if (builderFit.length > 0) {
        for (let j = 0; j < builderFit.length; j++) {
          if (Guitar.getModel().toLowerCase() !== null && builderFit[j]['model'].toLowerCase() === Guitar.getModel().toLowerCase()) {
            modelFit.push(builderFit[j]);
          }
        }
      }
    } else if (Guitar.getModel() === '') {
      modelFit = [...builderFit];
    }

    var typeFit = [];

    if (Guitar.getType() !== '') {
      if (modelFit.length > 0) {
        for (let k = 0; k < modelFit.length; k++) {
          if (Guitar.getType() !== null && modelFit[k]['type'] === Guitar.getType()) {
            typeFit.push(modelFit[k]);
          }
        }
      }
    } else if (Guitar.getType() === '') {
      typeFit = [...modelFit];
    }

    var backWoodFit = [];

    if (Guitar.getBackWood() !== '') {
      if (typeFit.length > 0) {
        for (let m = 0; m < typeFit.length; m++) {
          if (Guitar.getBackWood() !== null && typeFit[m]['backWood'] === Guitar.getBackWood()) {
            backWoodFit.push(typeFit[m]);
          }
        }
      }
    } else if (Guitar.getBackWood() === '') {
      backWoodFit = [...typeFit];
    }

    var topWoodFit = [];

    if (Guitar.getTopWood() !== '') {
      if (backWoodFit.length > 0) {
        for (let n = 0; n < backWoodFit.length; n++) {
          if (Guitar.getTopWood() !== null && backWoodFit[n]['topWood'] === Guitar.getTopWood()) {
            topWoodFit.push(backWoodFit[n]);
          }
        }
      }
    } else if (Guitar.getTopWood() === '') {
      topWoodFit = [...backWoodFit];
    }

    if (topWoodFit.length > 0) {
      matchingGuitars = [...topWoodFit];
      return matchingGuitars;
    } else {
      return ''
    }
  }
}

let inventory = new Inventory([]);
inventory.addGuitar(95693, 1499.95, Builder.FENDER, 'Stratocaster', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
inventory.addGuitar(95612, 1549.95, Builder.FENDER, 'Stratocaster', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
inventory.addGuitar(95694, 1350.95, Builder.FENDER, 'Jaguar', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);

let whatErinLikes = new Guitar(0, 0, Builder.FENDER, '', Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
let whatErinCanGet = () => {
  console.log('Hi Erin, here are your options: ');
  console.log(inventory.search(whatErinLikes))
};

whatErinCanGet();