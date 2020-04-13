import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  public goToPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['departments', previousId]);
  }

  public goToNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['departments', nextId]);
  }

  public goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['departments/', { id: selectedId }])
  }

}
