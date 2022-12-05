import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../entity/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResstService {

  constructor(private httpClient:HttpClient) {

  }

  public getGreetMessage():Observable<any>{
    return this.httpClient.get("http://localhost:8080/",{responseType:'text'});
  }

  public getAllEmployees():Observable<any>{
    return this.httpClient.get("http://localhost:8080/employees",{responseType:'json'});
  }

  public addEmployee(newEmployee:Employee):Observable<any>{
    return this.httpClient.post("http://localhost:8080/employees",newEmployee,{responseType:'text'});
  }

  public updateEmployee(updateEmployee:Employee):Observable<any>{
    return this.httpClient.put("http://localhost:8080/employees", updateEmployee, {responseType:"text"});
  }

  public deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/employees/"+id,{responseType:"text"});
  }
}
