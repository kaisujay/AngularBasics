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

  dummyData=[  //some Dummy Data which will come from some kind of "Forms"
    {
      code: "INR",
      symbol: "&#22;",
      rate: "12,456.3456",
      description: "Indian Rupees",
      rate_float: 14346.6578
    }
  ]

  saveDummyData(dummyData:any)    //just a Dummy Save
  {
    this.userdata.saveUsers(dummyData).subscribe((result)=>{
      console.warn(result);      
    });
  }
}
