import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getUserdata(){
    return [
      {
        Name:"Sujay",
        Age:22
      },
      {
        Name:"Ajay",
        Age:26
      },
    ]
}
}
