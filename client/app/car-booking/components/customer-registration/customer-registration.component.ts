import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'dc-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {
  formGroup: FormGroup;
  filteredStreets = of(['cas', 'sdd']);

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      fullName: fb.control('', Validators.required),
      preferedCar: fb.control(''),
      autoParts: fb.control('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formGroup.value);
  }
}
