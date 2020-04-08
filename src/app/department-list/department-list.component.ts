import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments: object[] = [
    { "id": 1, "name": "Developers" },
    { "id": 2, "name": "QAs" },
    { "id": 3, "name": "DevOps" },
    { "id": 4, "name": "Scrum masters" },
    { "id": 5, "name": "Product Owners" }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSelect(department: any){
    this.router.navigate(['departments', department.id])
  }

}
