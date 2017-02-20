import { FakeApiModel } from './fake-api.model';

export class FakeApi {
  all(): FakeApiModel[] {
    return [new FakeApiModel(1, 'Description 1'), new FakeApiModel(2, 'Description 2')];
  }
}
