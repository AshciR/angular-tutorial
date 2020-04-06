import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = '/assets/data/employees.json';
  private _badUrl: string = '/assets/data/foo.json';

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

}
