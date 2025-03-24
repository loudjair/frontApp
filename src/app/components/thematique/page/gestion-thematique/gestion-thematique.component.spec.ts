import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionThematiqueComponent } from './gestion-thematique.component';

describe('GestionThematiqueComponent', () => {
  let component: GestionThematiqueComponent;
  let fixture: ComponentFixture<GestionThematiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionThematiqueComponent]
    });
    fixture = TestBed.createComponent(GestionThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
