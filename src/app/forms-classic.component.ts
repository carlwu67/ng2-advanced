import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-classic',
  templateUrl: './forms-classic.component.html',
  styleUrls: ['./forms-classic.component.css']
})
export class FormsClassicComponent implements OnInit {
  forms:Formclass=new Formclass();
  constructor() {


  }

  ngOnInit() {


  }

}

 class Formclass{
   RoundedCorners:string;


}
