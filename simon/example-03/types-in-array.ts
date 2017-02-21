import { ArrayWithDifferentTypes } from './types-in-array.interface';


const arrayWithDifferentTypes: ArrayWithDifferentTypes = {
  id: '1',
  type: 'specialType',
  attributes: {
    test: 'attr'
  },
  includes: [
    {
      id: '4',
      type: 'subcategories'
    },
    {
      id: '3',
      type: 'categories'
    }
  ]
};

// Type '"categories2"' is not assignable to type '"subcategories"'.
const wrongArrayWithDifferentTypes: ArrayWithDifferentTypes = {
  id: '1',
  type: 'specialType',
  attributes: {
    test: 'attr'
  },
  includes: [
    {
      id: '4',
      type: 'subcategories'
    },
    {
      id: '3',
      type: 'categories'
    },
    {
      id: '3',
      type: 'categories2'
    }
  ]
};
