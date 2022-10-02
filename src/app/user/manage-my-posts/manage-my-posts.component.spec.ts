import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyPostsComponent } from './manage-my-posts.component';

describe('ManageMyPostsComponent', () => {
  let component: ManageMyPostsComponent;
  let fixture: ComponentFixture<ManageMyPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMyPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
