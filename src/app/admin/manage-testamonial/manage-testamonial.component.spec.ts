import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTestamonialComponent } from './manage-testamonial.component';

describe('ManageTestamonialComponent', () => {
  let component: ManageTestamonialComponent;
  let fixture: ComponentFixture<ManageTestamonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTestamonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTestamonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
