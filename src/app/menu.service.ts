import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Headers, RequestOptions} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  constructor(public http: HttpClient) { 
    
  }

  fetchMenuDetails()
  {

  return this.http.get('http://192.168.1.11:5000/getMenuDetails/')

  }
  addMenuDetails()
  {
   

  }
  public addDataInRestaurentMenu(url: string, param: any) {
    const body = JSON.stringify(param);
    const data={}
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {
      headers: httpHeaders
         };     
      return this.http
          .post(url, body,options).subscribe
          (res=>{
            console.log(res)
            console.log('hello')
          })
}
}
