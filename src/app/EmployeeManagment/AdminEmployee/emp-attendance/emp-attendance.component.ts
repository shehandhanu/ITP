import { Employee } from 'src/app/shared/employee.model';

import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../shared/employee.service';


@Component({
  selector: 'app-emp-attendance',
  templateUrl: './emp-attendance.component.html',
  styleUrls: ['./emp-attendance.component.scss'],
  providers: [ EmployeeService ],

})
export class EmpAttendanceComponent implements OnInit {

  displayedColumns: any[] = ['Employee Name', 'Employee Position' , 'Employee Email', 'Attendance'];
  dataSource: Employee[] = [];

  constructor(public employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(
      data => {
        this.dataSource = data;
      }
    );
  }

}
