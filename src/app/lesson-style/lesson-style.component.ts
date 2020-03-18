import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-style',
  templateUrl: './lesson-style.component.html',
  styles: []
})
export class LessonStyleComponent implements OnInit {

  public hasError: boolean;
  public highlightColor: String;
  public titleStyles: Object = {
    color: "blue",
    fontStyle: "italic"
  };

  constructor() { }

  ngOnInit() {
    this.hasError = false;
    this.highlightColor = "orange";
  }

}
