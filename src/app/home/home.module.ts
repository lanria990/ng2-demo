import {NgModule} from "@angular/core";
import { RouterModule} from "@angular/router";
import {homeRoutes} from "./home.routes";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports:[
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports:[],
  declarations:[
    HomeComponent,
    // CommonModule,
  ],
  providers:[],
})

export class HomeModule{}
