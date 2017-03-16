import {RouterModule, Routes} from '@angular/router'

import {AppComponent} from './app.component'
import  {LoginComponent} from  './user/login/login.component'
import {ForgetPwdComponent} from "./user/forget-pwd/forget-pwd.component"
import {RegisterComponent} from "./user/register/register.component";
import {ChartComponent} from "./chart/chart.component";


export const appRoutes: Routes= [{
  path: '',
  redirectTo: 'posts',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'forgetpwd',
  component: ForgetPwdComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'home',
  loadChildren: './home/home.module#HomeModule'
}, {
  path: 'posts',
  loadChildren: './home/home.module#HomeModule'
},{
  path:'post',
  loadChildren:'./post/post.module#PostModule'
},{
  path:'echart',
  component:ChartComponent
},{
  path:'manage',
  loadChildren: './manage/manage.module#ManageModule'
}]
