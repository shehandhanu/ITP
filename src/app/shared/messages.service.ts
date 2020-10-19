import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Messages } from './messages.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  id: any;
  selectedMessages: Messages = {

    _id: '',
    empEmail: '',
    date: '',
    empName: '',
    senderemail: '',
    subject: '',
    message: '',
    msgCheak: '',
    msgType: '',

  };

  constructor(private http: HttpClient) { }

  getMsgList(): Observable<Messages[]> {
    console.log('get message called');
    return this.http.get<Messages[]>( environment.apiBaseUrl + '/getmsglist');
  }

  deleteMsg(id: string): Observable<Messages>{
    return this.http.delete<Messages>(environment.apiBaseUrl + '/msgdelete/' + id );
  }

  markeAsReadMsg(id: string, value: string): Observable<Messages>{
    console.log(id + value);
    return this.http.put<Messages>(environment.apiBaseUrl + '/msgupdate/' + id , value);
  }

  markeAsUnReadMsg(id: string, value: string): Observable<Messages>{
    console.log(id + value);
    return this.http.put<Messages>(environment.apiBaseUrl + '/msgdeupdate/' + id , value);
  }

  onePMsgSend(message: Messages){
    console.log(message);
    return this.http.post(environment.apiBaseUrl + '/msgsend', message );
  }

  CPMsgSend(message: Messages){
    console.log(message);
    return this.http.post(environment.apiBaseUrl + '/msgsendcate', message );
  }

  APMsgSend(message: Messages){
    console.log(message);
    return this.http.post(environment.apiBaseUrl + '/msgsendall', message );
  }

}
