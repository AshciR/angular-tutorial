import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestClassComponent } from './test-class/test-class.component';
import { LessonStyleComponent } from './lesson-style/lesson-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesLessonComponent } from './pipes-lesson/pipes-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestClassComponent,
    LessonStyleComponent,
    EventBindingComponent,
    TemplateReferenceComponent,
    StructDirectivesComponent,
    NgForComponent,
    ParentComponent,
    ChildComponent,
    PipesLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
