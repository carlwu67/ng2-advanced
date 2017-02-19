import {NgModel} from '@angular/forms';
import { ElementRef, Input, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

@Input() name:string="Sky red";

@ViewChild('input')
  input: NgModel;

@ViewChild('input1') input1:ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
