import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBadWordComponent } from './manage-bad-word.component';

describe('ManageBadWordComponent', () => {
  let component: ManageBadWordComponent;
  let fixture: ComponentFixture<ManageBadWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBadWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBadWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
