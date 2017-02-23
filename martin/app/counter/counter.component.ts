import { Component, NgZone } from '@angular/core';

@Component({
  selector: "ns-counter",
  moduleId: module.id,
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  counter = 0;
  buttonEnabled = true;

  constructor() { }

  incrementCounter() {
    this.counter++;
    if (this.counter === 10) {
      this.buttonEnabled = false;
    }
  }
}
