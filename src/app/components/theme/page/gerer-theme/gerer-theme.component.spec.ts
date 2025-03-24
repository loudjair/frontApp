import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererThemeComponent } from './gerer-theme.component';

describe('GererThemeComponent', () => {
  let component: GererThemeComponent;
  let fixture: ComponentFixture<GererThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GererThemeComponent]
    });
    fixture = TestBed.createComponent(GererThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
