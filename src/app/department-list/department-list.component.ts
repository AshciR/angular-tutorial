import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  public selectedId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  public onSelect(department: any) {
    this.router.navigate(
      [department.id], // b/c it's relative, it'll append the id to /departments
      { relativeTo: this.activatedRoute } // this is the object responsible relative routing
    );
  }

  public isSelected(department: any): boolean {
    return department.id === this.selectedId;
  }

}
