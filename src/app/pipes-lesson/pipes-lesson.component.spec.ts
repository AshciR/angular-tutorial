import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesLessonComponent } from './pipes-lesson.component';

describe('PipesLessonComponent', () => {
  let component: PipesLessonComponent;
  let fixture: ComponentFixture<PipesLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
