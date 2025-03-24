import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRelationComponent } from './tab-relation.component';

describe('TabRelationComponent', () => {
  let component: TabRelationComponent;
  let fixture: ComponentFixture<TabRelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabRelationComponent]
    });
    fixture = TestBed.createComponent(TabRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
