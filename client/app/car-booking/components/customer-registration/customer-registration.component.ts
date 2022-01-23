import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import * as _ from 'lodash';

import { AutoPart } from '../../models/auto.model';

@Component({
  selector: 'dc-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {
  formGroup: FormGroup;
  carList: string[] = [];
  autoParts: string[] = [];
  filteredCar = new Observable<string[]>();
  filteredAutoParts = new Observable<string[]>();

  constructor(fb: FormBuilder, private _route: ActivatedRoute) {
    this._route.data.subscribe((data: any) => {
      this.carList = <string[]>_.map(data.autoLookUp.carList, 'brand');
      this.autoParts = _.map(data.autoLookUp.autoParts, (autoPart: AutoPart) => {
        return autoPart['List of auto parts'];
      });
    });
    this.formGroup = fb.group({
      fullName: fb.control('', Validators.required),
      preferedCar: fb.control(''),
      autoParts: fb.control('')
    });
  }

  ngOnInit(): void {
    this.filteredCar = this.formGroup.controls['preferedCar'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.carList)),
    );
    this.filteredAutoParts = this.formGroup.controls['autoParts'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, this.autoParts)),
    );
  }

  private _filter(value: string, list: any[]): string[] {
    const filterValue = this._normalizeValue(value);
    return list.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  onSubmit(){
    console.log(this.formGroup.value);
  }
}
