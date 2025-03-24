import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterModifierPersonnageComponent } from './form-ajouter-modifier-personnage.component';

describe('FormAjouterModifierPersonnageComponent', () => {
  let component: FormAjouterModifierPersonnageComponent;
  let fixture: ComponentFixture<FormAjouterModifierPersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterModifierPersonnageComponent]
    });
    fixture = TestBed.createComponent(FormAjouterModifierPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
