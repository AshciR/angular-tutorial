import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestClassComponent } from './test-class/test-class.component';
import { LessonStyleComponent } from './lesson-style/lesson-style.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestClassComponent,
    LessonStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
