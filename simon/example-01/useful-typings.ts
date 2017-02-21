import { PublicCustomerApiObject } from './user-api.interface';

export const publicCustomerMockJSON: PublicCustomerApiObject = {
  id: '44',
  type: 'users',
  attributes: {
    firstName: 'Simon',
    lastName: 'Huber',
    zip: '8055',
    city: 'Zürich',
    country: 'Schweiz'
  }
};
