import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toDoList: string[] = []; //Empty String Array

  addItem(value: string) {
    this.toDoList.push(value);
  }

  removeItem(value: string) {
    const index = this.toDoList.indexOf(value, 0); 
    this.toDoList.splice(index, 1); //To Remove we have to use "splice"

    this.toDoList = this.toDoList.filter(x=>x !== value); // Another way to remove from arary
  }
}
