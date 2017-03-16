import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {manageRoutes} from "./manage.routes";
import {CommonModule} from "@angular/common";
import {ManageMainComponent} from "./manage-main/manage-main.component";
import {PostService} from "./post-table/post-table.service";
import {PostSharedModule} from "../shared/post.module";
import {SharedModule} from "../shared/shared.module";
import {PostTableComponent} from "./post-table/post-table.component";

@NgModule({
  declarations:[ManageMainComponent,PostTableComponent],
  imports:[
    CommonModule,
    SharedModule,
    PostSharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  exports:[ManageMainComponent],
  providers:[PostService]
})

export  class   ManageModule {
}
