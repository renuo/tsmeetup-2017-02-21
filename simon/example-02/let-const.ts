// const != c++ const
// This should not be confused with the idea that the values they refer to are immutable.
// (https://www.typescriptlang.org/docs/handbook/variable-declarations.html)
const costArray: number[] = [];
costArray.push(3);

// TS2540:Cannot assign to 'array' because it is a constant or a read-only property.
costArray = [];

let notConstArray: number[] = [];
notConstArray.push(3);
notConstArray = [];
