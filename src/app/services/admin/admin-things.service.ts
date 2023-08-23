import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Customer } from 'src/app/interface/Customer';
const httpOptions= {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
} 
@Injectable({
  providedIn: 'root'
})

export class AdminThingsService {
  private apiUrl :string= "http://localhost:5000/customers";
  constructor(private http:HttpClient) { }

  getCustomers() : Observable<Customer[]> {
      return this.http.get<Customer[]>(this.apiUrl);
  }
  addCustomer(customer :Customer){
    console.log("hii")
    return this.http.post<Customer>(this.apiUrl , customer , httpOptions);

  }
}
