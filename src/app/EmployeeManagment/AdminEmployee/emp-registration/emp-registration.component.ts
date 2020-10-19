import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { EmployeeService } from '../../../shared/employee.service';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.scss'],
  providers: [EmployeeService]
})
export class EmpRegistrationComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSucessMessage: boolean;
  serverErrorMessages: String;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.employeeService.postEmployee(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        alert('Add Employee Success');
        this.resetForm(form);
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

  resetForm(form: NgForm) {
    this.employeeService.selectedEmployee = {
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
      _id: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
