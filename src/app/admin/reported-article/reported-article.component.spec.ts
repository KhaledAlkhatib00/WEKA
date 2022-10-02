import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedArticleComponent } from './reported-article.component';

describe('ReportedArticleComponent', () => {
  let component: ReportedArticleComponent;
  let fixture: ComponentFixture<ReportedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
