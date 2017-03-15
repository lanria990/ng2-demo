import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {manageRoutes} from "./manage.routes";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations:[RouterModule.forChild(manageRoutes)],
  imports:[CommonModule],
  providers:[],
  exports:[]
})

export  class ManageModule{

}
