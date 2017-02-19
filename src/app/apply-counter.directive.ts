import { Input,HostListener,HostBinding,Directive } from '@angular/core';

  //selector: '[appApply-Counter]'
@Directive({
  selector: '.pt0[appApply-Counter]'
})
export class ApplyCounterDirective {

@HostBinding('class.bg-success')
@Input() bgclass=false;

@HostListener('click',['$event'])
myClick($event){
  this.bgclass=!this.bgclass;
  console.log($event);
};

  constructor() {

     setTimeout(()=> {
       this.bgclass=true;
     }, 5000);

  }

}
