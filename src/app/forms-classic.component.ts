import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-classic',
  templateUrl: './forms-classic.component.html',
  styleUrls: ['./forms-classic.component.css']
})
export class FormsClassicComponent implements OnInit {
  forms:Formclass=new Formclass();
  formdata:any={
  "RoundedCorners": "ABC",
  "group1": {
    "Withhelp": "123",
    "Labelfocus": "456"
  }
};
  constructor() {


  }

  ngOnInit() {


  }

}

 class Formclass{
   RoundedCorners:string;


}
