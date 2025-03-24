import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdministrationUserComponent } from './page-administration-user.component';

describe('PageAdministrationUserComponent', () => {
  let component: PageAdministrationUserComponent;
  let fixture: ComponentFixture<PageAdministrationUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdministrationUserComponent]
    });
    fixture = TestBed.createComponent(PageAdministrationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
