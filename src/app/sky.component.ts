import {NgModel} from '@angular/forms';
import { ContentChild,ElementRef, Input, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent implements OnInit {

@Input() name:string;

@ViewChild('input') input: NgModel;

@ViewChild('input1') input1:ElementRef;

@Input() titleimgsrc:string;

  @ContentChild('btn')
  btn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

    getCounter() {
    if(this.btn) {
      console.log(this.btn.nativeElement.innerText);
    }
  }

}
