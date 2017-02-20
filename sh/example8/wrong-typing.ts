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

let c: SampleStruct;
c = <SampleStruct> {
  aNaem: 'test',
  bName: 'test',
  cName: 'test',
  dName: 'test'
};

const d: SampleStruct = {
  aName: 'test',
  bName: 'test',
  cName: 'test',
  dName: 'test'
};
