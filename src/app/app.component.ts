import { Component } from '@angular/core';
import { Person } from './classes/person';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'app';
 heading = 'Person Details';
 person: any;
 public myPeeps: Person = new Person();
 result: any[];

 constructor() {
   console.log(this.myPeeps.peoples);
   this.result = this.myPeeps.peoples;
 }
}
