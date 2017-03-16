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
import {RegisterComponent} from "./user/register/register.component";
import {RegisterService} from "./user/register/register.service";
import {EqualValidator} from "./user/directives/equal-validator.directive";
import {ChartComponent} from "./chart/chart.component";
import { EchartsAppDirective} from "./chart/directives/echart.directive";
import {ChartService} from "./chart/chart.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EqualValidator,
    EchartsAppDirective,
    ChartComponent
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
    ForgetPwdService,
    RegisterService,
    ChartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
