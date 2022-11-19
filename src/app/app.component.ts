import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:number=10;

  sendValue()
  {
    this.data=Math.floor(Math.random()*100);
  }
}
