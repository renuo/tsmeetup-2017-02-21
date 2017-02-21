const aAny: any = 4;
let bAny: any = 'string';
let cAny: any = {some: 'object'};

let aObject: Object = 4;
const bObject: Object = 'string';
let cObject: Object = {some: 'object'};

let aShortForm: {} = 4;
let bShortForm: {} = 'string';
const cShortForm: {} = {some: 'object'};

// type Object and {} are of type any
aObject = aAny;
aShortForm = aAny;

// type any and {} are of type Object
bAny = bObject;
bShortForm = bObject;

// type Object and any are of type {}
cAny = cShortForm;
cObject = cShortForm;

// empty classes are any too!
class Empty {}
let empty = new Empty();
empty = 'string';
empty = 10;
empty = {some: 'object'};

export function test() {}
