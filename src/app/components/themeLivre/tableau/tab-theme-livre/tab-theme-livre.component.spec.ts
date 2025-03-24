import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabThemeLivreComponent } from './tab-theme-livre.component';

describe('TabThemeLivreComponent', () => {
  let component: TabThemeLivreComponent;
  let fixture: ComponentFixture<TabThemeLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabThemeLivreComponent]
    });
    fixture = TestBed.createComponent(TabThemeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
