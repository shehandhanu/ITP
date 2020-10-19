import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import {Router} from '@angular/router';
import { Employee } from 'src/app/shared/employee.model';
// import { Update } from '../emp-registration/emp-registration.component';

import { EmployeeService } from '../../../shared/employee.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.scss']
})
export class EmpUpdateComponent implements OnInit {

  @Input() editEmployee: any;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('Hi On Submit Update');
    console.log(form.value);
    this.employeeService.updateEmployee(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        alert('Employee Update Success');
      },
      err => {
        if (err === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          this.serverErrorMessages = 'Somthing Worng Pleace Contact The Admin.'
        }
      }
    );
    alert('Update SuccessFuly');
  }

}
