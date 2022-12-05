import { Component } from '@angular/core';
import { EmployeeResstService } from 'src/app/service/employee-resst.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoRestComponent {
  greeting!:string;
  errorMessage!:string;
  constructor(private empRestService:EmployeeResstService){ }
  public getGreeting(){
    this.empRestService.getGreetMessage().subscribe(
      (data)=>{this.greeting=data, this.errorMessage=""},
      (error)=>{this.errorMessage="Server down please try later!", this.greeting=""}                 //error.statusText          //JSON.stringify(error)
    );
  }
}
