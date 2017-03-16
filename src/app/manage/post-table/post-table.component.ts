import {Component, OnInit} from "@angular/core";
import {PostService} from "./post-table.service";
@Component({
  selector:'post-table',
  templateUrl:'./post-table.component.html',
  styleUrls:['./post-table.component.scss']
})

export class PostTableComponent implements OnInit{
    config={
    columns :[{
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }]
  }
  public datas:Array<any>;

  constructor(public postService:PostService){}
  ngOnInit(){
   this.datas = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }]

  }
}
