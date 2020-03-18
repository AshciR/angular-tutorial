import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greeting = '';

  constructor() { }

  ngOnInit() {
  }

  public onClick(event: any){
    console.log('The button was clicked');
    this.greeting = event.type;
    console.log(event);
  }

}
