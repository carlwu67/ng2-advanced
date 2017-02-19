import { CardsComponent } from './cards.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, ActivatedRoute, Router,PreloadAllModules } from '@angular/router';
import { fallbackRoute } from './shared/fallback-router';


const routes: Routes = [
  //{path: '',component:LayoutComponent},
  //{path:'',redirectTo:'/layout',pathMatch:'full'},
  //{path: 'layout',component:LayoutComponent},
  //{path:'page2',component:Page2Component},
  //{path:'page2-1',component:Page2Component},
  { path: '', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards/:type', component: CardsComponent },
  {
    path: 'charts/:username',
    loadChildren: './charts/charts.module#ChartsModule'
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true ,preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
