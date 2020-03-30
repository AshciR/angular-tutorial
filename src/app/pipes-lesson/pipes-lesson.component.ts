import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-lesson',
  templateUrl: './pipes-lesson.component.html',
  styleUrls: ['./pipes-lesson.component.css']
})
export class PipesLessonComponent implements OnInit {

  public name: String = 'Richie';
  public message: String = 'welcome to the universe';
  public person: object = {
    "firstName": "Sasha",
    "lastName": "Gardner"
  };
  public now: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
