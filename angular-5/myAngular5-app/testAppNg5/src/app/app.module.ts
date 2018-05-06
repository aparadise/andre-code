import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { DataService } from './data.service';//i added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //i added
import { FormsModule } from '@angular/forms'; //i added
import { AppRoutingModule } from './app-routing.module'; //i added

import { AppComponent } from './app.component'; 
import { HomeComponent } from './home/home.component'; //i added
import { AboutComponent } from './about/about.component'; //i added


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
