import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/interface/Transaction';
import { CustomerThingsService } from 'src/app/services/customer/customer-things.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent   {
  public idx = 1;
  public cutomerId: string = '';
  public transactions : Transaction[] = [];
  constructor(private customerThings : CustomerThingsService , private activatedRoute: ActivatedRoute,private toastr: ToastrService)  {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
        this.cutomerId = paramsId['id'];
        console.log(this.cutomerId);
    });
    this.customerThings.getTransaction(this.cutomerId).subscribe((t)=>this.transactions = t);


  
 }

onSubmitTransaction(transaction : Transaction){
  this.customerThings.makeTransaction(transaction).subscribe((res)=>{
    this.toastr.success('transaction created successfully!!',"" ,{ timeOut: 3000});
    this.idx = 1;
    this.transactions.push(res)
  });
}

}
