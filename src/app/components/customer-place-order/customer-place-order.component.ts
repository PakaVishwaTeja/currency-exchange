import { Transaction } from './../../interface/Transaction';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/interface/Account';
import { CustomerThingsService } from 'src/app/services/customer/customer-things.service';

@Component({
  selector: 'app-customer-place-order',
  templateUrl: './customer-place-order.component.html',
  styleUrls: ['./customer-place-order.component.css']
})
export class CustomerPlaceOrderComponent   implements OnInit{
  @Input() cid : string = "";
  @Output() onIdxChange:EventEmitter<number> = new EventEmitter();
  @Output() onSubmitTransaction:EventEmitter<Transaction> = new EventEmitter();
  public idx = 1;
  accounts : Account[] = [];
  submit(data : any){
    console.log(data.form.value);
    let transaction : Transaction = {
      id : Math.floor(Math.random()*100000),
      cid : Number(this.cid),
      faid : data.form.value.from,
      taid :data.form.value.to,
      amount : Number(data.form.value.amount)
    }
    this.onSubmitTransaction.emit(transaction);
    
    
  }
  constructor(private customerThigs:CustomerThingsService  ){}

  ngOnInit(): void {
    this.customerThigs.getAccounts(this.cid).subscribe((res)=>{this.accounts = res.accs});
  }

}
