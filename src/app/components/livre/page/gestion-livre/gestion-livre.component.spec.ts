import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLivreComponent } from './gestion-livre.component';

describe('GestionLivreComponent', () => {
  let component: GestionLivreComponent;
  let fixture: ComponentFixture<GestionLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionLivreComponent]
    });
    fixture = TestBed.createComponent(GestionLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
