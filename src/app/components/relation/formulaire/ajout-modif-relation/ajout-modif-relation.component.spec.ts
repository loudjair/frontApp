import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModifRelationComponent } from './ajout-modif-relation.component';

describe('AjoutModifRelationComponent', () => {
  let component: AjoutModifRelationComponent;
  let fixture: ComponentFixture<AjoutModifRelationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutModifRelationComponent]
    });
    fixture = TestBed.createComponent(AjoutModifRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
