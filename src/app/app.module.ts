import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { SortproductPipe } from './pipes/sortproduct.pipe';
import { SearchproductsPipe } from './pipes/searchproducts.pipe';
import { HomeComponent } from './component/home/home.component';
import { HelpComponent } from './component/help/help.component';
import { ContactComponent } from './component/contact/contact.component';
import { DemoComponent } from './component/demo/demo.component';
import { LoginComponent } from './component/login/login.component';
import { UserAuthGuard } from './auth/user-auth.guard';
import { EmployeeService } from './service/employee.service';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './component/display-employee/display-employee.component';
import { ErrorComponent } from './component/error/error.component';
import { DemoRestComponent } from './component/rest/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialPipe,
    SortproductPipe,
    SearchproductsPipe,
    HomeComponent,
    HelpComponent,
    ContactComponent,
    DemoComponent,
    LoginComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent,
    ErrorComponent,
    DemoRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserAuthGuard,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
