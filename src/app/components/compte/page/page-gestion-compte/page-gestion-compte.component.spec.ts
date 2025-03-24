import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionCompteComponent } from './page-gestion-compte.component';

describe('PageGestionCompteComponent', () => {
  let component: PageGestionCompteComponent;
  let fixture: ComponentFixture<PageGestionCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGestionCompteComponent]
    });
    fixture = TestBed.createComponent(PageGestionCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
