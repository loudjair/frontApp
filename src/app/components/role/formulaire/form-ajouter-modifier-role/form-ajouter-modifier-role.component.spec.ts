import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterModifierRoleComponent } from './form-ajouter-modifier-role.component';

describe('FormAjouterModifierRoleComponent', () => {
  let component: FormAjouterModifierRoleComponent;
  let fixture: ComponentFixture<FormAjouterModifierRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterModifierRoleComponent]
    });
    fixture = TestBed.createComponent(FormAjouterModifierRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
