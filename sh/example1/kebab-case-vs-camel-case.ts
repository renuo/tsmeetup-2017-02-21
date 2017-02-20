interface CamelCaseStruct {
  currentPage: number,
  nextPage: number
}

interface KebabCaseStruct {
  'current-page': number,
  'next-page': number
}

const kebabCaseStruct: KebabCaseStruct = {
  'current-page': 3,
  'next-page': 4
};

// this would fail:
const kebabCaseStruct2: KebabCaseStruct = {
  'current-page': 3,
  'next-page': 4,
  // TS2322:Type '{ 'current-page': number; 'next-page': number; 'total-page': number; }' is not assignable to type 'KebabCaseStruct'.
  'total-page': 5
};

const camelCaseStruct: CamelCaseStruct = {
  currentPage: 3,
  nextPage: 4
};

// this works
console.log(kebabCaseStruct['current-page']); // recognizes

// TS7017:Element implicitly has an 'any' type because type 'KebabCaseStruct' has no index signature.console.log(kebabCaseStruct['current-page2']);
console.log(kebabCaseStruct['current-page2']);

console.log(camelCaseStruct.); // with auto suggestion
