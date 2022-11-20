import { Component } from '@angular/core';
import { Data } from '@angular/router';
import {UsersataService} from './services/usersata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  users:any;

  constructor(private userdata: UsersataService) {
    userdata.getUsers().subscribe((data)=>{
      console.warn("data",data);
      
      this.users=data});
  }
}
