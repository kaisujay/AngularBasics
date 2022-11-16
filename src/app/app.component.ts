import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name: string = 'Sujay Majumder'; //No Private. ByDefault it is Public
  //Name = 'Sujay Majumder'; //If not mentioning ":string" that means it is ":any"

  getName(): string { //":string" is the return type
    return "Hello - " + this.Name;
  }

  getNameWithAge(data: number): any { //":string" is the return type
    return "Hello - " + this.Name + " Age - " + data;
  }

  Names = ["jay", "mon", "raj"];  //Array

  User = {  //Object
    FullName :'Sujay Majumder',
    Age : 25
  }

}
