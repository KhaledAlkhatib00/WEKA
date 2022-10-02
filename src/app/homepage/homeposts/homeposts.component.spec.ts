import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepostsComponent } from './homeposts.component';

describe('HomepostsComponent', () => {
  let component: HomepostsComponent;
  let fixture: ComponentFixture<HomepostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
