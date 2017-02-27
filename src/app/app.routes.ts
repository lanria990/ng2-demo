import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import  {LoginComponent} from  './user/login/login.component'
import {ForgetPwdComponent} from "./user/forget-pwd/forget-pwd.component";


export const appRoutes = [{
  path: 'login',
  component: LoginComponent
},{
  path: 'forgetpwd',
  component: ForgetPwdComponent
}]
