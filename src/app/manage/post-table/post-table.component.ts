
import {Component, OnInit} from "@angular/core";
@Component({
  selector:'post-table',
  templateUrl:'./post-table.component.html',
  styleUrls:['./post-table.component.scss']
})

export class PostTableComponent implements OnInit{
  public  config={
    columns :[{
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }]
  }
  public datas:Array<any>;

  constructor(){}
  ngOnInit(){
   this.datas = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }]

  }
}
