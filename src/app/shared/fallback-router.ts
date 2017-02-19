import { Route } from '@angular/router';

export const fallbackRoute:Route={path:'**',redirectTo:'/forms',pathMatch:'full'};
