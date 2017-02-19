import { HostListener,HostBinding,Directive } from '@angular/core';

  //selector: '[appApply-Counter]'
@Directive({
  selector: '.pt0[appApply-Counter]'
})
export class ApplyCounterDirective {

@HostBinding('class.bg-success') bgclas=false;

@HostListener('click',['$event'])
myClick(){
  this.bgclas=!this.bgclas;
};

  constructor() {

    setTimeout(()=> {
      this.bgclas=true;
    }, 5000);

  }

}
