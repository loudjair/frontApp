import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGererPersonnageComponent } from './page-gerer-personnage.component';

describe('PageGererPersonnageComponent', () => {
  let component: PageGererPersonnageComponent;
  let fixture: ComponentFixture<PageGererPersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGererPersonnageComponent]
    });
    fixture = TestBed.createComponent(PageGererPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
