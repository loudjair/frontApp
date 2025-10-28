import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipaleParoleComponent } from './page-principale-parole.component';

describe('PagePrincipaleParoleComponent', () => {
  let component: PagePrincipaleParoleComponent;
  let fixture: ComponentFixture<PagePrincipaleParoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePrincipaleParoleComponent]
    });
    fixture = TestBed.createComponent(PagePrincipaleParoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
