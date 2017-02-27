import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import  {LoginComponent} from  './user/login/login.component'


export const appRoutes = [{
  path: 'login',
  component: LoginComponent
}]
