import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
   {path : 'signin' , component : SigninComponent},
   {path : 'admin' , component : AdminHomeComponent},
   {path : 'customer' , component : CustomerHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
