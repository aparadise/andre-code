import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //added this and add instance below in the contructor
import { Router } from '@angular/router'; //added this and add instance below in the contructor
import { DataService } from '../data.service'; //i added (notes i put two trailing '..')

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;

  //normally you will create property and bind it the res value for api for a database (res => property dataabase binded value )
  constructor( private route: ActivatedRoute, private router: Router, private _data:DataService  ) {
    this.route.params.subscribe( res => console.log(res.id) ); //notice the name 'route' matches the private
   }

  ngOnInit() {
    this._data.goal.subscribe( res => this.goals = res ); //this being called from the above goals propery of any.
  }
  
 //you need once you add the 'Router' libary call a new method to the class using this to route to the URL: this.router.navigate(['']);
  sendMeHome(){
    //notice the name 'router' matches the private
    this.router.navigate(['']); //this is empty pointing the home empty path in the router
  }

}
