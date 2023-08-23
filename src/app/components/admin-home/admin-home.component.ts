import { Customer } from 'src/app/interface/Customer';
import { Component, Input, OnInit } from '@angular/core';
import { AdminThingsService } from 'src/app/services/admin/admin-things.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public idx = 1;
  public demo1BtnClick() {
    const tabCount = 3;
    
  }  customers : Customer[] = [];
     constructor(private adminThings:AdminThingsService ,private toastr: ToastrService  ){}
  ngOnInit(): void {
    this.adminThings.getCustomers().subscribe((customers)=>this.customers = customers);
  }

  addCustomer(customer : Customer){
    console.log(customer);
    this.adminThings.addCustomer(customer).subscribe((Customer)=>{
      this.customers.push(customer);
      this.idx = 1;
      this.toastr.success('Customer created successfully!!',"" ,{ timeOut: 3000});
    });

  }
}
