import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userForm=new FormGroup({
    txtBoxName:new FormControl('',[Validators.required]),
    txtBoxEmail:new FormControl('',[Validators.required,Validators.email])
  });
    
  getFormValue()
  {
    console.warn(this.userForm.value);
  }

  get nameValidation()
  {
    return this.userForm.get('txtBoxName');
  }

  get emailValidation()
  {
    return this.userForm.get('txtBoxEmail');
  }
}
