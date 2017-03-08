import {Component, OnInit} from "@angular/core";
import {Post} from "../model/post-model";
import {PostDetailService} from "./post-detail.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})


export class PostDetailComponent implements OnInit {
  public post: Post = new Post();

  constructor(public postDetailService: PostDetailService, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.getPost(params['id']))
  }

  public getPost(id: string) {
    this.postDetailService.getPost(id).subscribe(data => this.post = data, error => console.log('post detail error', error))
  }
}
