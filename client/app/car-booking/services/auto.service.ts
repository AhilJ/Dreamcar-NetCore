import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'client/environments/environment';
import { Observable } from 'rxjs';
import { AutoPart, Car } from '../models/auto.model';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private _http: HttpClient) { }

  retrieveCar(): Observable<Car[]> {
    return this._http.get<Car[]>(`${ApiRoutes.autoApi}/Cars9096be5.json`);
  }

  retrieveAutoPart(): Observable<AutoPart[]> {
    return this._http.get<AutoPart[]>(`${ApiRoutes.autoApi}/ListOfAutoParts1aaa4e5.json`);
  }
}
