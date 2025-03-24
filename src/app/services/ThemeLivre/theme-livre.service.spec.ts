import { TestBed } from '@angular/core/testing';

import { ThemeLivreService } from './theme-livre.service';

describe('ThemeLivreService', () => {
  let service: ThemeLivreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeLivreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
