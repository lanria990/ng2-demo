import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import {PostlistService} from "./postlist/postlist.service";
import {PostlistComponent} from "./postlist/postlist.component";
import {SharedModule} from "../shared/shared.module";
@NgModule({
  imports: [SharedModule,RouterModule, RouterModule.forChild(postRoutes)],
  exports: [],
  declarations: [PostlistComponent],
  providers: [PostlistService]
})

export class PostModule {

}
