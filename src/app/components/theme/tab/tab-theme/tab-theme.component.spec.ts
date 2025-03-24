import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThemeComponent } from './tab-theme.component';

describe('TabThemeComponent', () => {
  let component: TabThemeComponent;
  let fixture: ComponentFixture<TabThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabThemeComponent]
    });
    fixture = TestBed.createComponent(TabThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
