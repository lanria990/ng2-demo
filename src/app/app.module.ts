import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {RouterModule} from '@angular/router'


import {SharedModule} from "./shared/shared.module";
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes'
import {LoginService} from "./user/login/login.service";
import {ForgetPwdService} from "./user/forget-pwd/forget-pwd.service";

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // ForgetPwdComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoginService,
    ForgetPwdService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
