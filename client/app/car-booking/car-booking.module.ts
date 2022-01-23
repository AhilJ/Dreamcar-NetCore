import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRegistrationComponent } from './containers/car-registration/car-registration.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { RegistrationSummaryComponent } from './components/registration-summary/registration-summary.component';



@NgModule({
  declarations: [
    CarRegistrationComponent,
    CustomerRegistrationComponent,
    RegistrationSummaryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarBookingModule { }
