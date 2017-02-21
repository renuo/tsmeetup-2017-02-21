class Car {
  name: string;

  horn() {
    console.log(`Toot from ${this.name}`);
  }
}

class Cat {
  hello: string;
}

class TrafficJam {
  private readonly cars: Car[] = [];

  stuck(car: Car) {
    this.cars.push(car);
  }

  tick() {
    this.cars.forEach(car => car.horn());
  }
}

const jam = new TrafficJam();

// somewhere else in the code
const car = new Car();
const cat = new Cat();
jam.stuck(car);
jam.stuck(<Car> <any> cat);

// somewhere else in the code
jam.tick();
