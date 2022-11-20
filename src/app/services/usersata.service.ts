import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersataService {

  constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json");  //API got from Internet
  }

  saveUsers(data:any)
  {
    return this.http.post("https://api.coindesk.com/v1/bpi/currentprice.json",data);  //API got from Internet
  }
}
