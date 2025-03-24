import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipalePersonnageComponent } from './page-principale-personnage.component';

describe('PagePrincipalePersonnageComponent', () => {
  let component: PagePrincipalePersonnageComponent;
  let fixture: ComponentFixture<PagePrincipalePersonnageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePrincipalePersonnageComponent]
    });
    fixture = TestBed.createComponent(PagePrincipalePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
