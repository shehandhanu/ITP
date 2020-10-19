//Built In
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import {  MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDashboardComponent } from './EmployeeManagment/AdminEmployee/emp-dashboard/emp-dashboard.component';
import { EmpLoginComponent } from './EmployeeManagment/emp-login/emp-login.component';
import { EmpAttendanceComponent } from './EmployeeManagment/AdminEmployee/emp-attendance/emp-attendance.component'
import { EmpLeavesComponent } from './EmployeeManagment/AdminEmployee/emp-leaves/emp-leaves.component';
import { EmpRequestsComponent } from './EmployeeManagment/AdminEmployee/emp-requests/emp-requests.component';
import { EmpMesseagesComponent } from './EmployeeManagment/AdminEmployee/emp-messeages/emp-messeages.component';
import { EmpReportsComponent } from './EmployeeManagment/AdminEmployee/emp-reports/emp-reports.component';
import { EmpListsComponent } from './EmployeeManagment/AdminEmployee/emp-lists/emp-lists.component';
import { EmpRegistrationComponent } from './EmployeeManagment/AdminEmployee/emp-registration/emp-registration.component';
import { EmployeeComponent } from './EmployeeManagment/AdminEmployee/employee/employee.component';
import { EmpAccountComponent } from './EmployeeManagment/AdminEmployee/emp-account/emp-account.component';
import { SEmpAccountComponent } from './EmployeeManagment/StaffEmployee/semp-account/semp-account.component';
import { SEmpDashboardComponent } from './EmployeeManagment/StaffEmployee/semp-dashboard/semp-dashboard.component';
import { SEmpLeavesComponent } from './EmployeeManagment/StaffEmployee/semp-leaves/semp-leaves.component';
import { SEmployeeComponent } from './EmployeeManagment/StaffEmployee/semployee/semployee.component';
import { SEmpRequestComponent } from './EmployeeManagment/StaffEmployee/semp-request/semp-request.component';
import { SEmpMesseagesComponent } from './EmployeeManagment/StaffEmployee/semp-messeages/semp-messeages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpUpdateComponent } from './EmployeeManagment/AdminEmployee/emp-update/emp-update.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpDashboardComponent,
    EmpLoginComponent,
    EmpAttendanceComponent,
    EmpLeavesComponent,
    EmpRequestsComponent,
    EmpMesseagesComponent,
    EmpReportsComponent,
    EmpListsComponent,
    EmpRegistrationComponent,
    EmployeeComponent,
    EmpAccountComponent,
    SEmpAccountComponent,
    SEmpDashboardComponent,
    SEmpLeavesComponent,
    SEmployeeComponent,
    SEmpRequestComponent,
    SEmpMesseagesComponent,
    EmpUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
