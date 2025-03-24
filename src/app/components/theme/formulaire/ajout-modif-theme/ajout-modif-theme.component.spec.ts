import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifThemeComponent } from './ajout-modif-theme.component';

describe('AjoutModifThemeComponent', () => {
  let component: AjoutModifThemeComponent;
  let fixture: ComponentFixture<AjoutModifThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutModifThemeComponent]
    });
    fixture = TestBed.createComponent(AjoutModifThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
