import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGererThematiqueComponent } from './page-gerer-thematique.component';

describe('PageGererThematiqueComponent', () => {
  let component: PageGererThematiqueComponent;
  let fixture: ComponentFixture<PageGererThematiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageGererThematiqueComponent]
    });
    fixture = TestBed.createComponent(PageGererThematiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
