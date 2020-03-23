import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent implements OnInit {

  public displayName: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
