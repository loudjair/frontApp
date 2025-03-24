import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLivreComponent } from './tab-livre.component';

describe('TabLivreComponent', () => {
  let component: TabLivreComponent;
  let fixture: ComponentFixture<TabLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabLivreComponent]
    });
    fixture = TestBed.createComponent(TabLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
