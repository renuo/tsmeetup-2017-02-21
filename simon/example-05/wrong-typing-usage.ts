interface SampleStruct {
  aName: string;
  bName: string;
  cName: string;
}

let b: SampleStruct;
b = <SampleStruct> {
  aName: 'test',
  bName: 'test',
  cName: 'test',
  dName: 'test'
};

let c; // has implicit any
c = <SampleStruct> {
  aName: 'test',
  bName: 'test',
  cName: 'test',
  dName: 'test'
};
// console.log(Object.keys(c)) will return LOG: ['aName', 'bName', 'cName', 'dName']
// IDE suggests only aName, bName and cName but has all four attributes

let d: SampleStruct;
d = <SampleStruct> {
  aNaem: 'test',
  bName: 'test',
  cName: 'test',
  dName: 'test'
};

const e: SampleStruct = {
  aName: 'test',
  bName: 'test',
  cName: 'test',
  dName: 'test'
};
