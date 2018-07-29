import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(public http: HttpClient) { }

  fetchMenuDetails()
  {

  return this.http.get('http://192.168.1.11:5000/getMenuDetails/')

  }
}
