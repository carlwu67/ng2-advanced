import { NgZone,Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { initDashboard } from './shared/app-init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private zone:NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(()=>{
        initDashboard();
        console.log('initDashboard');
    });
    //initDashboard();
    //document.addEventListener
  }
  debug()
  {
    console.log('initDashboard');
  }

  goCards(type:any)
  {
    this.router.navigateByUrl('/cards/'+type);
  }

}
