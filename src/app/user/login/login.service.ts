import { Injectable } from '@angular/core';
import {Http,Response} from "@angular/http";
import {Subject, Observable} from "rxjs";
import {User} from "../model/user-model";

@Injectable()
export  class LoginService{
  public loginUrl = 'mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();
  constructor(public http:Http){

  }

  public get currentUser():Observable<User>{
    return this.subject.asObservable();
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
