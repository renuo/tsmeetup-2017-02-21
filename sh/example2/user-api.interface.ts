export interface PublicCustomerApiObject {
  id: string;
  type: 'users';
  attributes: PublicCustomerApiObjectAttributes;
}

export interface PublicCustomerApiObjectAttributes {
  firstName: string;
  lastName: string;
  zip: string;
  city: string;
  country: string;
}
