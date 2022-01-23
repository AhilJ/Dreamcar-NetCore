import { Routes } from '@angular/router';
import { CarRegistrationComponent } from './containers/car-registration/car-registration.component';
import { CarRegistrationResolver } from './services/car-registration.resolver';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'submit'
    },
    {
        path: 'submit',
        component: CarRegistrationComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
            autoLookUp: CarRegistrationResolver
        }
    }
];