import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThematiqueComponent } from './tab-thematique.component';

describe('TabThematiqueComponent', () => {
  let component: TabThematiqueComponent;
  let fixture: ComponentFixture<TabThematiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabThematiqueComponent]
    });
    fixture = TestBed.createComponent(TabThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
