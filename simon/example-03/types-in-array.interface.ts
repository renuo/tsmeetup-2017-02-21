interface CategoryObject {
  id: string;
  type: 'categories';
}

interface SubcategoryObject {
  id: string;
  type: 'subcategories'
}

export interface ArrayWithDifferentTypes {
  id: string;
  type: 'specialType',
  attributes: {
    test: 'attr'
  },
  includes: (SubcategoryObject | CategoryObject)[]
}
