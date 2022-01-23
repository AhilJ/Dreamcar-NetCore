import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';

import { CarRegistrationComponent } from './containers/car-registration/car-registration.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component';
import { RegistrationSummaryComponent } from './components/registration-summary/registration-summary.component';
import { routes } from './routes';
import { CarRegistrationResolver } from './services/car-registration.resolver';


@NgModule({
  declarations: [
    CarRegistrationComponent,
    CustomerRegistrationComponent,
    RegistrationSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CarRegistrationResolver
  ]
})
export class CarBookingModule { }
