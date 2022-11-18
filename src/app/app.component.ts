import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  WithOutButtonClick:string='';
  WithButtonClick:string='';

  getName(value:string)
  {
    console.log(value);
    this.WithOutButtonClick=value;
  }


  getName1(value:string)
  {
    console.log(value);
    this.WithButtonClick=value;
  }
}
