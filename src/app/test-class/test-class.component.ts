import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class',
  templateUrl: './test-class.component.html',
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {

  public name: String;
  public successClass: String = "text-success";
  public hasError: boolean = false;
  public isSpecial: boolean = true;
  public messageClasses: Object = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
    this.name = 'Richie';
  }

}
