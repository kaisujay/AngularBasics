import { Component } from '@angular/core';
import { Data } from '@angular/router';
import {UserDataService} from './services/user-data.service'  //Mind that "'./services/" for other component it is "'../services/"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users:any;
  constructor(private userData : UserDataService){
    console.warn(userData.getUserdata());
    this.users=userData.getUserdata()
  }
}
