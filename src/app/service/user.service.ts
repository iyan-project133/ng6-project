import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient ) { }

  getUser() {
    return this.http.get('https://api.myjson.com/bins/11bqk8')
  }

}
