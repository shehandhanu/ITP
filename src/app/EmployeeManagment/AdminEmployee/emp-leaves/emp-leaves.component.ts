import { Component, OnInit } from '@angular/core';
import { Leaves } from 'src/app/shared/leaves.model';
import { NgForm } from '@angular/forms';

import { LeaveService } from '../../../shared/leaves.service';

@Component({
  selector: 'app-emp-leaves',
  templateUrl: './emp-leaves.component.html',
  styleUrls: ['./emp-leaves.component.scss'],
  providers: [ LeaveService ]
})
export class EmpLeavesComponent implements OnInit {

  dataSource: Leaves[] = [];

  showSucessMessage: boolean;
  serverErrorMessages: String;
  value:  any;

  constructor(public leaveService: LeaveService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    console.log('emp leaves compontt work');
    this.leaveService.getLeaveList().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

  getstates(checkValue){
     this.value = parseInt(checkValue);
     if(this.value == 1){
       return 1;
     }else
      if(this.value == 2){
        return 2;
     }else{
       return 0;
     }
  };

  // convertdate(column){
  //   var y = column ;
  //   return y;
  // }

  // checkdate(){
  //   var d = new Date(),
  //       month = '' + (d.getMonth() + 1),
  //       day = '' + d.getDate(),
  //       year = d.getFullYear();

  //   if (month.length < 2)
  //       month = '0' + month;
  //   if (day.length < 2)
  //       day = '0' + day;

  //       var x = [year, month, day].join('-');
  //       console.log(x);
  //   return x;
  // }

  onSubmit(form: NgForm) {
    console.log(form);
    this.leaveService.postLeaveForm(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        alert('Leave Form Success');
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

  deleteLeave(id){
    var r = confirm('Do You Want To Delete The Leave Form Now?');
    if (r === true)
    {
      console.log(id);
      this.leaveService.deleteLeaveForm(id).subscribe(
        res => {
        }, err => {
          console.error(err);
        });
    }
    else
    {
      alert('Leave Form Not Deleted');
    }
    alert('Leave Form Deleted');
    this.getdata();
  }

  approveLeave(id, cheak){
    var r = confirm('Do You Want To Edit Details of ?');
    if (r === true)
    {
      console.log(cheak + id);

      this.leaveService.approveLeaveForm(id, cheak).subscribe(
        res => {
          this.showSucessMessage = true;
          alert('Leave Approvel Success');
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
      console.log(' Hi this is update function end');
  };

  rejectLeave(id, cheak){
    var r = confirm('Do You Want To Reject Leave Form ?');
    if (r === true)
    {
      console.log(cheak + id);

      this.leaveService.rejectLeaveForm(id, cheak).subscribe(
        res => {
          this.showSucessMessage = true;
          alert('Leave Reject Success');
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
      console.log(' Hi this is update function end');
  };

  resetForm(form: NgForm) {
    this.leaveService.selectedLeaves = {
      _id : '',
      empEmail : '',
      date : '',
      empName : '',
      subject : '',
      reason : '',
      leaveCheak : '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
