import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterModifierLivreComponent } from './form-ajouter-modifier-livre.component';

describe('FormAjouterModifierLivreComponent', () => {
  let component: FormAjouterModifierLivreComponent;
  let fixture: ComponentFixture<FormAjouterModifierLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterModifierLivreComponent]
    });
    fixture = TestBed.createComponent(FormAjouterModifierLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
