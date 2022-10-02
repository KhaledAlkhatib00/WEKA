import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSidBarComponent } from './user-sid-bar.component';

describe('UserSidBarComponent', () => {
  let component: UserSidBarComponent;
  let fixture: ComponentFixture<UserSidBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSidBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSidBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
