import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {LoginService} from "./user/login/login.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  constructor(public router:Router,public activateRoute:ActivatedRoute,public loginService:LoginService){}
  ngOnInit(){

  }
}
