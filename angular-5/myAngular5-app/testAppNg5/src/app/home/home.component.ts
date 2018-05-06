import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger  } from '@angular/animations';
import { DataService } from '../data.service'; //i added (note i put two trailing '..')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional:true}),
      
        query(':enter', stagger('300ms', [
          animate('1.5s ease-in', keyframes([
             style({ opacity: 0, transform: 'translateY(-75%)', offset:0}),
             style({ opacity: .5, transform: 'translateY(35px)', offset:.3}),
             style({ opacity: 1, transform: 'translateY(0)', offset:1}),
          ]))]),{optional:true}),

        query(':leave', stagger('300ms', [
          animate('1.5s ease-in', keyframes([
             style({ opacity: 1, transform: 'translateY(0)', offset:0}),
             style({ opacity: .5, transform: 'translateY(35px)', offset:.3}),
             style({ opacity: 1, transform: 'translateY(-75%)', offset:1}),
          ]))]),{optional:true})


      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  deleteDetails: string = 'click on the bucket list itself below to delete it.'; 
  itemCount: number;
  btnTxt: string = 'Add an item';
  goalText: string = 'My first life goal.';
  goals = [];

  constructor(private _data:DataService) { }

  //this function updates the variables above for {{}}
  //NOTE: the order of the properties in the ngOnIt() MUST be in the exact order
  ngOnInit() {
    this._data.goal.subscribe( res => this.goals = res); //updates the goal property for the services
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals); //updates the goal property for the services 'data.service.ts'
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);//updates the goal property for the services 'data.service.ts'
  }

  removeItem(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals); //updates the goal property for the services 'data.service.ts'
  }

}
