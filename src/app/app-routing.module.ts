import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './auth/user-auth.guard';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ContactComponent } from './component/contact/contact.component';
import { DemoComponent } from './component/demo/demo.component';
import { DisplayEmployeeComponent } from './component/display-employee/display-employee.component';
import { ErrorComponent } from './component/error/error.component';
import { HelpComponent } from './component/help/help.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { DemoRestComponent } from './component/rest/demo/demo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'help', component: HelpComponent },
  { path: 'demo', component: DemoComponent, canActivate:[UserAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'display-employee', component: DisplayEmployeeComponent },
  { path: 'rest/demo', component: DemoRestComponent },
  { path: '**', component:  ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
