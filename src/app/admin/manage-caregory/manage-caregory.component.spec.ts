import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCaregoryComponent } from './manage-caregory.component';

describe('ManageCaregoryComponent', () => {
  let component: ManageCaregoryComponent;
  let fixture: ComponentFixture<ManageCaregoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCaregoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCaregoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
