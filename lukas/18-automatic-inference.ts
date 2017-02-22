let a = 4;
let b = 'string';
let c = {some: 'object'};

a = b;
a = c;

b = a;
b = c;

c = a;
c = b;

export class Some {
  some: string;
}

export class Other {
  other: string;
}

function otherFunc(other: Other) {
  console.log(other);
}

const someA = new Some();
otherFunc(someA);

// the any on this line...
const someB: any = new Some();
// ...is like a cast on that line!
otherFunc(someB);

console.log(someA);
console.log(someB);

export function test() {}
