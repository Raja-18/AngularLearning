import { Component } from '@angular/core';
import { Employee } from 'src/app/entity/employee';
import { EmployeeResstService } from 'src/app/service/employee-resst.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  msg="";
  errorMsg="";
  newEmployee:Employee= new Employee();

  constructor(private employeeService:EmployeeService, private empRestService:EmployeeResstService){}

addUser(){
  console.log("add user called");
  console.log(this.newEmployee);
  // this.employeeService.addEmployee(this.newEmployee);
  this.empRestService.addEmployee(this.newEmployee).subscribe(
    (data)=>{this.msg=data; this.errorMsg="";},
    (error)=>{this.msg=""; this.errorMsg=error;}
  );
  this.msg="";
  this.errorMsg="";
}

}
