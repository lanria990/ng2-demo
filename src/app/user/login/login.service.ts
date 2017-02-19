import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";

@Injectable()
export  class LoginService{
  public loginUrl = 'mock-data/user-login-mock.json';
  constructor(public http:Http){

  }
  login(user){
    console.log(user);
   return  this.http.post(this.loginUrl,user).map((response:Response)=>{
      let user = response.json();
      console.log('user data',user);
      if (user && user.token){

      }
      return response;
   }) .subscribe(data=>console.log('login success',data),error=>console.log(error))
  }
}
