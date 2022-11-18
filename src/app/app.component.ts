import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Users=[
    {
      Name:'Jay',
      Age:24,
      Social:['FB','WA']
    },
    {
      Name:'Nikki',
      Age:21,
      Social:['Insta','FB','WA']
    },
    {
      Name:'Sunny',
      Age:22,
      Social:['SnapChat','Twitter']
    }
  ]
}
