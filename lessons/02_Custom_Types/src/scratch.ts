interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  make: string;
  model?: string;
  speed: number;

  constructor(make: string, model?: string) {
    this.make = make;
    this.model = model;
    this.speed = 0;
  }

  move(): void {
    this.speed = 20;
    const name = this.make + (this.model ? ` ${this.model}` : "");
    console.log(`${name} is going ${this.speed} mph!`);
  }
}

const ford = new Car("Ford", "Fusion");
ford.move();
