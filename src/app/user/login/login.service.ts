import { Injectable } from '@angular/core';

@Injectable()
export  class LoginService{
  login(user){
    console.log(user);
  }
}
