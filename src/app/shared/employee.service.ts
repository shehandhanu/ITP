import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  id: any;
  selectedEmployee: Employee = {

    firstName: '',
    lastName: '',
    city: '',
    area: '',
    zipCode: '',
    empEmail: '',
    password: '',
    nicNumber: '',
    empPosition: '',
    basicsal: '',
    otrate: '',
    bankName: '',
    bankBranch: '',
    accNumber: '',
    _id: '',
  };

  constructor(private http: HttpClient) { }

  postEmployee(employee: Employee){
      return this.http.post( environment.apiBaseUrl + '/empregistration' , employee);
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>( environment.apiBaseUrl + '/emplist');
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(environment.apiBaseUrl + '/empdelete/' + id);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    this.id = employee._id;
    console.log(this.id);
    return this.http.put<Employee>(environment.apiBaseUrl + '/empupdate/' + this.id, employee);
  }

}
