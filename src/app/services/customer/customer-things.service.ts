import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/interface/Account';
import { Transaction } from 'src/app/interface/Transaction';
const httpOptions= {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
} 

@Injectable({
  providedIn: 'root'
})

export class CustomerThingsService {
  private apiUrl :string= "http://localhost:5000/";
  constructor(private http:HttpClient) { }

  // getCustomers() : Observable<Customer[]> {
  //     return this.http.get<Customer[]>(this.apiUrl);
  // }
  // addCustomer(customer :Customer){
  //   console.log("hii")
  //   return this.http.post<Customer>(this.apiUrl , customer , httpOptions);

  // }

  getAccounts(cid : string){
     let url : string = this.apiUrl +"accounts/" + cid ;
    return  this.http.get<any>(url);
  }
  getTransaction(cid : any){
    let url : string = this.apiUrl  + "transactions/?cid=" + cid   ;
    return  this.http.get<any>(url);
  }
  makeTransaction(transaction: Transaction){
    console.log("making transaction" , transaction)
    let urll : string = this.apiUrl  + "transactions"  ;
    console.log(urll);
    return this.http.post<Transaction>(urll, transaction , httpOptions);
  }

}
