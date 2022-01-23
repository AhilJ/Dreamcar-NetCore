import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { AutoPart, Car } from '../models/auto.model';
import { AutoService } from './auto.service';

@Injectable()
export class CarRegistrationResolver implements Resolve<Car[]> {
  constructor(private _autoService: AutoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    const dataToGet: {[key: string]: Observable<any>} = {}

    dataToGet['carList'] = this._autoService.retrieveCar().pipe(
      map((carList: Car[]) => carList)
    );
    dataToGet['autoParts'] = this._autoService.retrieveAutoPart().pipe(
      map((autoParts: AutoPart[]) => autoParts)
    );
    return forkJoin(dataToGet).pipe(catchError((error) => of(console.log(`Auto Service Errored: ${error}`))));
  }
}
