import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./car-registration.component.scss']
})
export class CarRegistrationComponent {
  constructor(private _route: ActivatedRoute) {
    this._route.data.subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }
}
