export class Duck {
  constructor(public name: string) {}

  sound() {
    console.log(`Quack from ${this.name} Duck`);
  }
}

export function makeSound(duck: Duck) {
  duck.sound();
}

const duck = new Duck('Donald');
makeSound(duck);

export class Bunny {
  constructor(public name: string) {}

  // unused method?
  sound() {
    console.log(`Hop from ${this.name} Bunny`);
  }
}

const bunny = new Bunny('Bugs');
// this works, because the Bunny "interface" is the same as the Duck "interface"
makeSound(bunny);

const mouse = {name: 'Mickey', sound: () => console.log(`Hello from Mickey Mouse`)};
// this works, because the object "interface" {name: string; sound: (() => void)}
// is the same as the Duck "interface"
makeSound(mouse);

