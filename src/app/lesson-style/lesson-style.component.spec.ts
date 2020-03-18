import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonStyleComponent } from './lesson-style.component';

describe('LessonStyleComponent', () => {
  let component: LessonStyleComponent;
  let fixture: ComponentFixture<LessonStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
