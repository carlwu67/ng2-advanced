import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {
  username:string;
  parentparams$:Subscription;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.parentparams$=this.route.parent.params.subscribe(params=>{
      this.username=params['username'];
      console.log('username:'+this.username);
    });
    //this.username=this.route.parent.snapshot.params['username'];

  }
  ngDestroy(){

    this.parentparams$.unsubscribe();

  }

}
