import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoPersonnageComponent } from './page-info-personnage.component';

describe('PageInfoPersonnageComponent', () => {
  let component: PageInfoPersonnageComponent;
  let fixture: ComponentFixture<PageInfoPersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInfoPersonnageComponent]
    });
    fixture = TestBed.createComponent(PageInfoPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
