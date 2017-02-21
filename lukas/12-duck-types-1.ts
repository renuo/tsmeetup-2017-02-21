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
