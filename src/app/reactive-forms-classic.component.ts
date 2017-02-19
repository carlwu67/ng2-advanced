import { Component, OnInit } from '@angular/core';

import { FormArray, Validators, FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-reactive-forms-classic',
  templateUrl: './reactive-forms-classic.component.html',
  styleUrls: ['./reactive-forms-classic.component.css']
})
export class ReactiveFormsClassicComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['Will', [Validators.required, Validators.minLength(3)]],
      group1:this.fb.array([
        this.fb.control('Array 1',Validators.required),
        this.fb.control('Array 2',Validators.required),
        this.fb.control('Array 3',Validators.required),
        this.fb.control('Array 4',Validators.required)
      ])

    });

   }
  getFieldInvalid(fieldName) {
    return this.form.controls[fieldName].invalid;
  }
  ngOnInit() {
    this.form.addControl('mail',this.fb.control('default@example.com',Validators.required));

    let group1:FormArray=<FormArray>this.form.controls['group1'];
    group1.insert(group1.length,this.fb.control('Array 5',Validators.required));
  }

}
