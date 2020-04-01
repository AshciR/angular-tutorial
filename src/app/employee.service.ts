import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(): object[] {
    return [
      { "id": 1, "name": "Sasha", "age": 29 },
      { "id": 2, "name": "Rick", "age": 30 },
      { "id": 3, "name": "Bob", "age": 21 },
      { "id": 4, "name": "Maria", "age": 40 }
    ];
  }

}
