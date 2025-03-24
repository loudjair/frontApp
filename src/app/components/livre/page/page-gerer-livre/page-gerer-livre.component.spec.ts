import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGererLivreComponent } from './page-gerer-livre.component';

describe('PageGererLivreComponent', () => {
  let component: PageGererLivreComponent;
  let fixture: ComponentFixture<PageGererLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGererLivreComponent]
    });
    fixture = TestBed.createComponent(PageGererLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
