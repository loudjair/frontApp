import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilThematiqueComponent } from './accueil-thematique.component';

describe('AccueilThematiqueComponent', () => {
  let component: AccueilThematiqueComponent;
  let fixture: ComponentFixture<AccueilThematiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilThematiqueComponent]
    });
    fixture = TestBed.createComponent(AccueilThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
