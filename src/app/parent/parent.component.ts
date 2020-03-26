import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public title: String = 'Angular Lessons';
  public name: String = 'Richie';
  public message: String = 'No';

  constructor() { }

  ngOnInit() {
  }

}
