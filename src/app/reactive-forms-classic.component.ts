import { Component, OnInit } from '@angular/core';

import {  Validators, FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms-classic',
  templateUrl: './reactive-forms-classic.component.html',
  styleUrls: ['./reactive-forms-classic.component.css']
})
export class ReactiveFormsClassicComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      'name': ['Will', Validators.required]
    });

   }
  getFieldInvalid(fieldName) {
    return this.form.controls[fieldName].invalid;
  }
  ngOnInit() {
    this.form.addControl('mail',this.fb.control('default@example.com',Validators.required));
  }

}
