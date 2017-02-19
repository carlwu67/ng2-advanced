import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FlotComponent } from './flot.component';
import { RadialComponent } from './radial.component';
import { RickshawComponent } from './rickshaw.component';

const routes: Routes = [
      { path: '', redirectTo: '/flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent },
      { path: 'radial', component: RadialComponent },
      { path: 'rickshaw', component: RickshawComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
