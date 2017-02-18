import { Component,OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {User} from "../model/user-model";
@Component({
  selector: 'app-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements  OnInit {
  // public user ={UserName:string,password:string};
  public user:User = new User();
  constructor(
    public loginService:LoginService
  ){}

  ngOnInit(){
    console.log("--- user-login-component ---");
  }

  public doLogin():void{
    this.loginService.login(this.user);
  }
  public validUserName(form,userName){
    console.log(form,userName);
  }

}
