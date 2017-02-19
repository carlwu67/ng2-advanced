
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { CardsComponent } from './cards.component';
import { FormsClassicComponent } from './forms-classic.component';
import { ReactiveFormsClassicComponent } from './reactive-forms-classic.component';
import { SkyComponent } from './sky.component';
import { ApplyCounterDirective } from './apply-counter.directive';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardsComponent,
    FormsClassicComponent,
    ReactiveFormsClassicComponent,
    SkyComponent,
    ApplyCounterDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
