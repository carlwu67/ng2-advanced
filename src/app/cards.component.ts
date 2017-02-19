import { SkyComponent } from './sky.component';
import { ViewChild,Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild(SkyComponent)
  sky: SkyComponent;

  type:string;
  constructor(private router:Router,private route:ActivatedRoute) {

   }

  ngOnInit() {
    //this.type=this.route.snapshot.params['type'];
    this.route.params.subscribe(params=>{
      this.type=params['type'];
    });
  }

  goCards(type:any)
  {
    this.router.navigateByUrl('/cards/'+type);
  }

  ngAfterViewInit() {
    console.log(this.sky.name);
  }

checkSkyInputDirty() {
    console.log(this.sky.input.dirty);
    console.log(this.sky.input1.nativeElement['value']);
  }

}
