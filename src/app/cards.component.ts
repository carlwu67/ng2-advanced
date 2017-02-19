import { SkyComponent } from './sky.component';
import { ViewChildren, QueryList,ElementRef,ViewChild,Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild(SkyComponent)
  sky: SkyComponent;

    @ViewChildren(SkyComponent)
  skies: QueryList<SkyComponent>;


counter = 0;

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

    this.skies.forEach(x => {
      console.log(x.titleimgsrc);
    });
  }



  incCounter() {
    this.counter++;
  }

  checkSkyInputDirty() {
    console.log(this.sky.input.dirty);
    console.log(this.sky.input1.nativeElement.value);
  }

}
