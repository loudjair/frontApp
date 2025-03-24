import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjouterModifierThematiqueComponent } from './form-ajouter-modifier-thematique.component';

describe('FormAjouterModifierThematiqueComponent', () => {
  let component: FormAjouterModifierThematiqueComponent;
  let fixture: ComponentFixture<FormAjouterModifierThematiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjouterModifierThematiqueComponent]
    });
    fixture = TestBed.createComponent(FormAjouterModifierThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
