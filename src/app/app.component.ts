import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userForm=new FormGroup({
    txtBoxName:new FormControl(''),
    txtBoxAge:new FormControl('')
  });
    
  getFormValue()
  {
    console.warn(this.userForm.value);
  }
}
