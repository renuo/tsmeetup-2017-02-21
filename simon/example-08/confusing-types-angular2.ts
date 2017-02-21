import { Component } from '@angular/core';

export interface CostItemStruct {
  price: number | null;
}

@Component({
  selector: 'my-form-component'
})
export class FormComponent {
  newCostItem: CostItemStruct = { price: 0};

  checkType() {
    console.log('type: ' + (typeof this.newCostItem.price) + ', value: ' + (this.newCostItem.price);
  }
}

// for '' it will return:
// type: object, value: null

// for '1' it will return:
// type: number, value: 1

// for 'e' it will return:
// type: object, value: null
