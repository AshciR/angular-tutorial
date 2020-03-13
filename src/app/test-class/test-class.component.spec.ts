import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClassComponent } from './test-class.component';

describe('TestClassesComponent', () => {
  let component: TestClassComponent;
  let fixture: ComponentFixture<TestClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
