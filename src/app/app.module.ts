import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { CustomerPlaceOrderComponent } from './components/customer-place-order/customer-place-order.component';
import {MatSelectModule} from '@angular/material/select';
import { CustomerBlockComponent } from './components/customer-block/customer-block.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AdminHomeComponent,
    HeaderComponent,
    CustomerHomeComponent,
    CustomerPlaceOrderComponent,
    CustomerBlockComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
