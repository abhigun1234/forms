import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public http : HttpClient) { }
/*
this method is written for fething 
the details of the user 
*/
  getUserDetails()
  { const serachText='ab'; 
    return this.http.get('http://api.github.com/search/users?q='+serachText);

  }
}
