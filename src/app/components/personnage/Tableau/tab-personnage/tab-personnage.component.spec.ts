import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPersonnageComponent } from './tab-personnage.component';

describe('TabPersonnageComponent', () => {
  let component: TabPersonnageComponent;
  let fixture: ComponentFixture<TabPersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabPersonnageComponent]
    });
    fixture = TestBed.createComponent(TabPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
