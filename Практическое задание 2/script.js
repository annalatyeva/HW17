const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://627400.ru/wp-content/uploads/b/e/3/be318e71585f7e3517e873aa657ead3f.jpeg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

class Transport {
    constructor (index) {
        this.id = data[index].id;
        this.type = data[index].type;
        this.price = data[index].price;
        this.brand = data[index].brand;
        this.price = data[index].price;
        this.image = data[index].image;
    }
    getInfo () {
        return {
            type: this.type,
            price: this.price,
            brand: this.brand
        }
    }
    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor (index) {
        super(index);
        this.doors = data[index].doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}


class Bike extends Transport {
    constructor (index) {
        super (index);
        this.maxSpeed = data[index].maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed = this.maxSpeed;
    }
}

let transportContainer;
function addCarContainer () {
    transportContainer = document.createElement('div'); 
    transportContainer.innerHTML = `<h1>${this.brand}</h1>
    <img src=${this.image}></img>
    <p>Цена: ${this.getPrice()} рублей</p>
    <p>Количество дверей: ${this.getDoorsCount()}</p>`;
    document.body.appendChild(transportContainer);
}
function addBikeContainer () {
    transportContainer = document.createElement('div'); 
    transportContainer.innerHTML = `<h1>${this.brand}</h1>
    <img src=${this.image}></img>
    <p>Цена: ${this.getPrice()} рублей</p>
    <p>Максимальная скорость: ${this.getMaxSpeed()}</p>`;
    document.body.appendChild(transportContainer);
}

let addCarContainerBind;
let addBikeContainerBind;

let cars = [];
let carIndex = 0;
let bikes = [];
let bikeIndex = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'car') {
        cars[carIndex] = new Car (i);
        addCarContainerBind = addCarContainer.bind(cars[carIndex]);
        addCarContainerBind();
        carIndex++;

    }

    if (data[i].type === 'bike') {
        bikes[bikeIndex] = new Bike (i);
        addBikeContainerBind = addBikeContainer.bind(bikes[bikeIndex]);
        addBikeContainerBind();
        bikeIndex++;
    }
}



