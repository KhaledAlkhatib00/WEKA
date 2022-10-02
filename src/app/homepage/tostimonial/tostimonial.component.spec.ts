import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostimonialComponent } from './tostimonial.component';

describe('TostimonialComponent', () => {
  let component: TostimonialComponent;
  let fixture: ComponentFixture<TostimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TostimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TostimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
