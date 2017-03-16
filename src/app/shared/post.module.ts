import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { SharedModule } from './shared.module';
import {PostTableComponent} from "../manage/post-table/post-table.component";



@NgModule({
  imports:[
    SharedModule,
    ModalModule.forRoot(),
  	PaginationModule.forRoot()
  ],
  declarations:[
    PostTableComponent
  ],
  exports:[
    ModalModule,
  	PaginationModule,
    PostTableComponent
  ]
})

export class PostSharedModule {

}
