import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot.component';
import { RadialComponent } from './radial.component';
import { RickshawComponent } from './rickshaw.component';


@NgModule({
  declarations: [
    FlotComponent,
    RadialComponent,
    RickshawComponent
  ],
    imports: [
    CommonModule,
    ChartsRoutingModule

  ]
})
export class ChartsModule { }
