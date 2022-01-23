import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarRegistrationComponent } from './car-booking/containers/car-registration/car-registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'car/registration', pathMatch: 'full'},
  {path: 'car', redirectTo: 'car/registration', pathMatch: 'full'},
  {
    path: 'car/registration',
    component: CarRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    onSameUrlNavigation: 'reload',
    paramsInheritanceStrategy: 'always',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
