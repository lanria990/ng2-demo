import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "../user/login/login.component";
import {ForgetPwdComponent} from "../user/forget-pwd/forget-pwd.component";


@NgModule({
  imports:[
  	CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations:[
    LoginComponent,
    ForgetPwdComponent
  ],
  exports:[
    CommonModule,
    FormsModule,
    LoginComponent,
    ForgetPwdComponent
  ]
})

export class SharedModule {

}
