import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonnageComponent } from './gestion-personnage.component';

describe('GestionPersonnageComponent', () => {
  let component: GestionPersonnageComponent;
  let fixture: ComponentFixture<GestionPersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPersonnageComponent]
    });
    fixture = TestBed.createComponent(GestionPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
