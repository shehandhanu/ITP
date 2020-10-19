import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/shared/messages.model';
import { NgForm } from '@angular/forms';

import { MessageService } from '../../../shared/messages.service';

@Component({
  selector: 'app-emp-messeages',
  templateUrl: './emp-messeages.component.html',
  styleUrls: ['./emp-messeages.component.scss']
})
export class EmpMesseagesComponent implements OnInit {

  dataSource: Messages[] = [];

  showSucessMessage: boolean;
  serverErrorMessages: String;
  value:  any;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.getdata();
  }

  onOneSubmit(form: NgForm) {
    console.log(form);
    this.messageService.onePMsgSend(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        alert('Send Messeage Success');
        this.resetForm(form);
        this.getdata();
      },
      err => {
        if (err === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.'
        }
      }
    );
  }

  CPMsgSend(form: NgForm) {
    console.log(form);
    this.messageService.CPMsgSend(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        alert('Send Messeage Success');
        this.resetForm(form);
        this.getdata();
      },
      err => {
        if (err === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.'
        }
      }
    );
  }

  APMsgSend(form: NgForm) {
  console.log(form);
  this.messageService.APMsgSend(form.value).subscribe(
    res => {
      this.showSucessMessage = true;
      alert('Send Messeage Success');
      this.resetForm(form);
      this.getdata();
    },
    err => {
      if (err === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      } else {
        this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.'
      }
    }
  );
}


  getdata(){
    console.log('emp messseage compontt work');
    this.messageService.getMsgList().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

  getstates(msgValue){
    this.value = parseInt(msgValue);
    if(this.value == 1){
       return 1;
     }else{
       return 0;
     }
  }

  markasread(id, cheak){

    console.log(cheak + id);

    this.messageService.markeAsReadMsg(id, cheak).subscribe(
        res => {
          this.showSucessMessage = true;
          this.getdata();
        },
        err => {
          if (err === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          } else {
            this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.';
          }
        });

    console.log(' Hi this is update function end');
  };

  markasunread(id, cheak){

    console.log(cheak + id);

    this.messageService.markeAsUnReadMsg(id, cheak).subscribe(
        res => {
          this.showSucessMessage = true;
          this.getdata();
        },
        err => {
          if (err === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          } else {
            this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.';
          }
        });

    console.log(' Hi this is update function end');
  };

  deletemsg(id){
    var r = confirm('Do You Want To Delete Messeage Form ?');
    if (r === true)
    {
      console.log( id);

      this.messageService.deleteMsg(id ).subscribe(
        res => {
          this.showSucessMessage = true;
          alert('Message Delete SuccessFul');
          this.getdata();
        },
        err => {
          if (err === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          } else {
            this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.';
          }
        });
    }
    else
    {
      alert('Employee Not Deleted');
    }
    this.getdata();
    console.log(' Hi this is update function end');
    this.getdata();
  };

  resetForm(form: NgForm) {
    this.messageService.selectedMessages = {
      _id : '',
      empEmail : '',
      date : '',
      empName : '',
      subject : '',
      message : '',
      msgCheak : '',
      senderemail: '',
      msgType: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
