import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked: number = 0;

  calculateClicked(value: string) {
    if (value === 'add') {
      this.clicked++;
    }
    else {
      this.clicked --;
    }
  }
}
