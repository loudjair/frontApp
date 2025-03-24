import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionThemeComponent } from './gestion-theme.component';

describe('GestionThemeComponent', () => {
  let component: GestionThemeComponent;
  let fixture: ComponentFixture<GestionThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionThemeComponent]
    });
    fixture = TestBed.createComponent(GestionThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
