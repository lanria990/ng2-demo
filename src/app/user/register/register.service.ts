

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {User} from "../model/user-model";
import {Subject} from "rxjs";
@Injectable()
export class RegisterService{
  public registerURL = 'mock-data/user-register-mock.json';
  public  testEmailURL = '';
  public subject:Subject<User> = new Subject<User>();
  constructor(public http:Http){}

  public register(user:User){
    console.log(user); //user password 需要加密
      return this.http.get(this.registerURL).map((response:Response)=>{
        let user =  response.json();
        this.subject.next(user);
      })
  }

  public validEmail(email:string){
    return this.http.get(this.testEmailURL)
      .map((response: Response) => response.json());
  }
}
