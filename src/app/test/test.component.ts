import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Richard";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;

  constructor() { }

  ngOnInit() { }

  greetUser() {
    return `Hello ${this.name}!`
  }

}
