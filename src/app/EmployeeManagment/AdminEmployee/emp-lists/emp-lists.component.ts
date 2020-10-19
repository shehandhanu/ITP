import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import {Router} from '@angular/router';


import { EmployeeService } from '../../../shared/employee.service';


@Component({
  selector: 'app-emp-lists',
  templateUrl: './emp-lists.component.html',
  styleUrls: ['./emp-lists.component.scss'],
  providers: [ EmployeeService ]
})
export class EmpListsComponent implements OnInit {

  displayedColumns: any[] = ['First Name' , 'Last Name', 'Employee Email', 'NIC Number', 'Employee Position', 'Account'];
  dataSource: Employee[] = [];

  editEmployee: any[] = [];
  showSucessMessage: boolean;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.getdata();
  }

  getdata(){
    console.log('emp leaves compontt work');
    this.employeeService.getEmployee().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

  deleteEmp(id){
    var r = confirm('Do You Want To Delete The Employee Now?');
    if (r === true)
    {
      alert('Employee Deleted');
      this.employeeService.deleteEmployee(id).subscribe(
        res => {
          alert('Employee Deleted');
          this.getdata();
        }, err => {
          console.error(err);
        });
    }
    else
    {
      alert('Employee Not Deleted');
    }
    this.getdata();
  }

  updateEmp(column){
    var r = confirm('Do You Want To Edit Details of ?')
    if (r === true)
    {
      console.log(column);
      this.editEmployee = column;
      console.log(this.editEmployee);
    }
    else
    {
      alert('Employee Not Deleted');
    }
      console.log(' Hi this is update function end');
      this.getdata();
    }

  }



