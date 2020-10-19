import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Leaves } from './leaves.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  id: any;
  selectedLeaves: Leaves = {

  _id : '',
  empEmail : '',
  date : '',
  empName : '',
  subject : '',
  reason : '',
  leaveCheak : '',

  };

  constructor(private http: HttpClient) { }

  getLeaveList(): Observable<Leaves[]> {
    console.log('get leave called');
    return this.http.get<Leaves[]>( environment.apiBaseUrl + '/getleavelist');
  }

  postLeaveForm(leave: Leaves){
    console.log(leave);
    return this.http.post(environment.apiBaseUrl + '/empleaveformsubmit', leave );
  }

  deleteLeaveForm(id: string): Observable<Leaves>{
    return this.http.delete<Leaves>(environment.apiBaseUrl + '/leaveformdelete/' + id );
  }

  approveLeaveForm(id: string, value: string): Observable<Leaves>{
    console.log(id + value);
    return this.http.put<Leaves>(environment.apiBaseUrl + '/leaveformupdate/' + id , value);
  }

 rejectLeaveForm(id: string, value: string): Observable<Leaves>{
    console.log(id + value);
    return this.http.put<Leaves>(environment.apiBaseUrl + '/leaveformreject/' + id , value);
  }

  updateEmployee(leave: Leaves): Observable<Leaves> {
    this.id = leave._id;
    console.log(this.id);
    return this.http.put<Leaves>(environment.apiBaseUrl + '/empupdate/' + this.id, leave);
  }

}
