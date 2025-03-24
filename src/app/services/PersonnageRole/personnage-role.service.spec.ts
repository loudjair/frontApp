import { TestBed } from '@angular/core/testing';

import { PersonnageRoleService } from './personnage-role.service';

describe('PersonnageRoleService', () => {
  let service: PersonnageRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnageRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
