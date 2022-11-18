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
      Age:24
    },
    {
      Name:'Nikki',
      Age:21
    },
    {
      Name:'Sunny',
      Age:22
    }
  ]
}
