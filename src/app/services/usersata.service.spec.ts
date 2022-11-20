import { TestBed } from '@angular/core/testing';

import { UsersataService } from './usersata.service';

describe('UsersataService', () => {
  let service: UsersataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
