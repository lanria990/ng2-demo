import {Component, OnInit} from "@angular/core";
import {Post} from "../model/post-model";
import {Subject} from "rxjs";
import {PostlistService} from "./postlist.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})

export class PostlistComponent implements OnInit {
  public maxSize: number = 5;
  public itemsPerPage: number = 5;
  public totalItems: number;
  public currentPage: number = 1;
  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>()
  public items: Array<Post>;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute, public  postlistService: PostlistService) {

  }

  ngOnInit() {
    console.log('searchText',this.searchText);
    this.activeRoute.params.subscribe(params=>{
      console.log('params',params);
      this.loadData(this.searchText,this.currentPage);
    })

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log('searchText',this.searchText);
        this.loadData(this.searchText, this.currentPage)
      });
  }

  public  loadData(searchText: string, page: number) {
    let offset = (this.currentPage - 1) * this.itemsPerPage;
    let end = (this.currentPage) * this.itemsPerPage;

    return this.postlistService.findPostlist(searchText, page).subscribe(res => {
        this.totalItems = res['total'];
        this.items = res["items"].slice(offset, end > this.totalItems ? this.totalItems : end);
      }, error => {
        console.log(error)
      },
      () => {
      })
  }
}
