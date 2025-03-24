import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPersonnageRoleComponent } from './tab-personnage-role.component';

describe('TabPersonnageRoleComponent', () => {
  let component: TabPersonnageRoleComponent;
  let fixture: ComponentFixture<TabPersonnageRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabPersonnageRoleComponent]
    });
    fixture = TestBed.createComponent(TabPersonnageRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
