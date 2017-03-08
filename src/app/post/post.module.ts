import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {postRoutes} from "./post.routes";
import {PostlistService} from "./postlist/postlist.service";
import {PostlistComponent} from "./postlist/postlist.component";
import {SharedModule} from "../shared/shared.module";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostDetailService} from "./post-detail/post-detail.service";
@NgModule({
  imports: [SharedModule,RouterModule, RouterModule.forChild(postRoutes)],
  exports: [],
  declarations: [PostlistComponent,PostDetailComponent],
  providers: [PostlistService,PostDetailService]
})

export class PostModule {

}
