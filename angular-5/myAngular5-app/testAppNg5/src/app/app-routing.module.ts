import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //add this route for home page
import { AboutComponent } from './about/about.component'; //add this route for about page


const routes: Routes = [
  {
    path:'', //this is the main home director so leave this blank
    component: HomeComponent
  },
  {
    path:'about/:id',  //this is the link that will mirror the route to the about page. <a routerLink="about">About</a>. Now to add parameters use '/:id/ or multpile paradmeters ':id/whatever' and update the link <a routerLink="about/29">About</a>.
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
