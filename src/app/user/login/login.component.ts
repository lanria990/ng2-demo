import { Component,OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { LoginService } from './login.service'
import {User} from "../model/user-model"
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements  OnInit {
  // public user ={UserName:string,password:string};
  public user:User = new User();
  public  subject :Subject<User> = new Subject<User>();
  constructor(
    public loginService:LoginService,
    public router:Router
  ){}

  ngOnInit(){
    console.log("--- user-login-component ---");
  }

  public doLogin():void{
    this.loginService.login(this.user).subscribe(data=>{
      console.log("login success>"+data);
      // this.router.navigateByUrl('/home')
    },error=>console.log(error));
  }

  public get CurrentUser():Observable<User>{
    return this.subject.asObservable();
  }
  // public validUserName(form,userName){
  //   console.log(form,userName);
  // }

}
