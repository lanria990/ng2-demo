import {PostlistComponent} from "./postlist/postlist.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
export const postRoutes = [  {
  path:'',
  redirectTo:'page/1',
  pathMatch:'full'
},{
  path: 'page/:page',
  component: PostlistComponent
},{
  path: 'page/:id',
  component: PostDetailComponent
}]
