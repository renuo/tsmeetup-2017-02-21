export class Color {
  name: 'red' | 'blue';
}

function draw(color: Color) {
  console.log(color.name);
}

const color1 = {name: 'red'};
// Not OK, type is {name: string}, but should be : {name: 'red' | 'blue'}
// May change in the future as it gets more powerful? (flow can handle this?)
draw(color1);

// OK
const color2 = {name: <'red'> 'red'};
draw(color2);

// OK
const color3: Color = {name: 'red'};
draw(color3);

// OK
draw({name: 'red'});
