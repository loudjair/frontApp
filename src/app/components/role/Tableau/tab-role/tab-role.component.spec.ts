import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRoleComponent } from './tab-role.component';

describe('TabRoleComponent', () => {
  let component: TabRoleComponent;
  let fixture: ComponentFixture<TabRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabRoleComponent]
    });
    fixture = TestBed.createComponent(TabRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
