import { Component, Output ,EventEmitter} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import { Customer } from 'src/app/interface/Customer';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  @Output() onCustomerSubmit:EventEmitter<Customer> = new EventEmitter();
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';}

    submit(login: any){
      const customer : Customer = {
        id : Math.floor(Math.random()*100000),
        firstName: login.form.value.firstName ,
        lastName: login.form.value.lastName,
        dob: login.form.value.dob.getDate() + "/" +(login.form.value.dob.getMonth()+1) + "/" + login.form.value.dob.getFullYear() ,
        age: 2023 - login.form.value.dob.getFullYear() ,
        email: login.form.value.email,
        gender: login.form.value.gender,
        phone: login.form.value.phone
      };
      this.onCustomerSubmit.emit(customer);
    }
}
