import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/user-data.service' //Mind that "'../services/" for app component it is "'./services/"

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  users:any;
  constructor(private userData : UserDataService) {
    console.warn(userData.getUserdata());
    this.users=userData.getUserdata();
   }

  ngOnInit(): void {
  }

}
