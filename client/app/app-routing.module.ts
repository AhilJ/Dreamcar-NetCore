import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'car/registration', pathMatch: 'full'},
  {path: 'car', redirectTo: 'car/registration', pathMatch: 'full'},
  {
    path: 'car/registration',
    loadChildren: () => import('./car-booking/car-booking.module').then(m => m.CarBookingModule)
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
