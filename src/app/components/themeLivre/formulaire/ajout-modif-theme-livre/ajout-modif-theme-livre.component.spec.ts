import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifThemeLivreComponent } from './ajout-modif-theme-livre.component';

describe('AjoutModifThemeLivreComponent', () => {
  let component: AjoutModifThemeLivreComponent;
  let fixture: ComponentFixture<AjoutModifThemeLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutModifThemeLivreComponent]
    });
    fixture = TestBed.createComponent(AjoutModifThemeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
