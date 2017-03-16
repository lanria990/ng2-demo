import {PostTableComponent} from "./post-table/post-table.component";
import {ManageMainComponent} from "./manage-main/manage-main.component";
export const manageRoutes = [{
  path: '',
  component: ManageMainComponent,
  children: [
    {path: '', redirectTo: 'posttable/page/1', pathMatch: 'full'},
    {path: 'posttable/page/:page', component: PostTableComponent},
    { path: '**', redirectTo:'posttable/page/1' }
  ]
}]
