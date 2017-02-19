import { CardsComponent } from './cards.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { FormsClassicComponent } from './forms-classic.component';
import { ReactiveFormsClassicComponent } from './reactive-forms-classic.component';
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, ActivatedRoute, Router, PreloadAllModules } from '@angular/router';
import { fallbackRoute } from './shared/fallback-router';
import { LoginComponent } from './login.component'
import { LayoutComponent } from './layout.component'
import { LoginRouteGuard } from './login-route-guard';
import { InputRouteGuard } from './input-route-guard';


const routes: Routes = [
  //{path: '',component:LayoutComponent},
  //{path:'',redirectTo:'/layout',pathMatch:'full'},
  //{path: 'layout',component:LayoutComponent},
  //{path:'page2',component:Page2Component},
  //{path:'page2-1',component:Page2Component},
  //{ path: '', component: FormsClassicComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'forms', component: FormsClassicComponent },
      { path: 'reactiveforms', component: ReactiveFormsClassicComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent , canActivate: [LoginRouteGuard]},
      { path: 'cards/:type', component: CardsComponent },
      {
        path: 'charts/:username',
        loadChildren: './charts/charts.module#ChartsModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent, canDeactivate: [InputRouteGuard] },
  fallbackRoute

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
