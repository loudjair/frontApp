import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterModifierPersonnageRoleComponent } from './form-ajouter-modifier-personnage-role.component';

describe('FormAjouterModifierPersonnageRoleComponent', () => {
  let component: FormAjouterModifierPersonnageRoleComponent;
  let fixture: ComponentFixture<FormAjouterModifierPersonnageRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterModifierPersonnageRoleComponent]
    });
    fixture = TestBed.createComponent(FormAjouterModifierPersonnageRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
