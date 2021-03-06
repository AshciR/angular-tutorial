import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


@NgModule({
  declarations: [
    routingComponents,
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
    PipesLessonComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
