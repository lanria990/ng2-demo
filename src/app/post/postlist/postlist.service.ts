import {Injectable} from "@angular/core";
import {Http, URLSearchParams, Response} from "@angular/http";
import {Post} from "../model/post-model";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostlistService {
  public postlistUrl = 'mock-data/postlist-mock.json';

  constructor(public http: Http) {
  }

  public findPostlist(searchText: string, page: number = 1): Observable<Post[]> {
    let url = this.postlistUrl;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText', searchText);
      url = this.postlistUrl;
    }
    params.set('page', String(page));
    return this.http.get(url, {search: params})
      .map((res: Response) => {
      return res.json();
    }).catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
