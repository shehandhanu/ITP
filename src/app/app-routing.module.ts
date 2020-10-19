import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDashboardComponent } from './EmployeeManagment/AdminEmployee/emp-dashboard/emp-dashboard.component';
import { EmpLoginComponent } from './EmployeeManagment/emp-login/emp-login.component';
import { EmpAttendanceComponent } from './EmployeeManagment/AdminEmployee/emp-attendance/emp-attendance.component';
import { EmpLeavesComponent } from './EmployeeManagment/AdminEmployee/emp-leaves/emp-leaves.component';
import { EmpMesseagesComponent } from './EmployeeManagment/AdminEmployee/emp-messeages/emp-messeages.component';
import { EmpReportsComponent } from './EmployeeManagment/AdminEmployee/emp-reports/emp-reports.component';
import { EmpRequestsComponent } from './EmployeeManagment/AdminEmployee/emp-requests/emp-requests.component';
import { EmpListsComponent } from './EmployeeManagment/AdminEmployee/emp-lists/emp-lists.component';
import { EmpRegistrationComponent } from './EmployeeManagment/AdminEmployee/emp-registration/emp-registration.component';
import { EmpAccountComponent } from './EmployeeManagment/AdminEmployee/emp-account/emp-account.component';
import { EmpUpdateComponent } from './EmployeeManagment/AdminEmployee/emp-update/emp-update.component';

import { SEmpDashboardComponent } from './EmployeeManagment/StaffEmployee/semp-dashboard/semp-dashboard.component';
import { SEmpLeavesComponent } from './EmployeeManagment/StaffEmployee/semp-leaves/semp-leaves.component';
import { SEmpRequestComponent } from './EmployeeManagment/StaffEmployee/semp-request/semp-request.component';
import { SEmpMesseagesComponent } from './EmployeeManagment/StaffEmployee/semp-messeages/semp-messeages.component';
import { SEmpAccountComponent } from './EmployeeManagment/StaffEmployee/semp-account/semp-account.component';

const routes: Routes = [

  { path : '', redirectTo: 'emplogin', pathMatch: 'full'},

  { path : 'empdashboard', component: EmpDashboardComponent },
  { path : 'emplogin', component: EmpLoginComponent },
  { path : 'empattendance', component: EmpAttendanceComponent },
  { path : 'empleaves', component: EmpLeavesComponent },
  { path : 'empmesseages', component: EmpMesseagesComponent },
  { path : 'empreports', component: EmpReportsComponent },
  { path : 'emprequests', component: EmpRequestsComponent },
  { path : 'emplist', component: EmpListsComponent },
  { path : 'empregistration', component: EmpRegistrationComponent },
  { path : 'empaccount', component: EmpAccountComponent },
  { path : 'empupdate', component: EmpUpdateComponent},

  { path : 'sempdashboard', component: SEmpDashboardComponent },
  { path : 'sempleaves', component: SEmpLeavesComponent },
  { path : 'sempmesseages', component: SEmpMesseagesComponent },
  { path : 'semprequests', component: SEmpRequestComponent },
  { path : 'sempaccount', component: SEmpAccountComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
