interface Named {
  name: string;
}

class Person {
  name: string;
}

let named: Named;
// OK, because interface of Named is narrower than interface of PersonWithAddress (structural typing)
named = new Person();

// Not OK, because it can help avoid errors (address: ... is unreachable code)
named = {name: 'something', address: 'other'};

// OK, because address: ... is theoretically reachable (and TypeScript is not smart enough)
const workaround = {name: 'something', address: 'other'};
named = workaround;

class PersonWithAddress {
  name: string;
  address: string;
}

// OK, because interface of Named is narrower than interface of PersonWithAddress
named = new PersonWithAddress();
// OK, because interface of Person is narrower than interface of PersonWithAddress
let person: Person;
person = new PersonWithAddress();

let personWithAddress: PersonWithAddress;
// Not OK, because PersonWithAddress has a wider interface than Person
personWithAddress = new Person();
