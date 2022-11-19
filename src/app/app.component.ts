import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name:string = 'Sujay Majumder';
  today:Date = new Date();

  user={
    name:'Sujay',
    age:26
  }
    
}
