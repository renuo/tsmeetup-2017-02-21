import { FakeApi } from './fake-api';
import { FakeApiModel } from './fake-api.model';

// I want to get all FakeApi Models and create an array with all ids

// Variant 1:
const mostComplicated: number[] = new FakeApi().all().map((fakeApiModel: FakeApiModel) => {
  return fakeApiModel.id;
});

// Variant 2: (type is inferred)
const lessComplicated: number[] = new FakeApi().all().map(fakeApiModel => {
  return fakeApiModel.id;
});

// Variant 3: (simplest)
const simple: number[] = new FakeApi().all().map(fakeApiModel => fakeApiModel.id);
