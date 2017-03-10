import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Post} from "../model/post-model";
@Injectable()
export class PostDetailService {
  public detailUrl = 'mock-data/post-mock.json';

  constructor(public http: Http) {
  }

  public getPost(id: string): Observable<Post> {
    return this.http.get(this.detailUrl).map((res: Response) => res.json());
  }
}
