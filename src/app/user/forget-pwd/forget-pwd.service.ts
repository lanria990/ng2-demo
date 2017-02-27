
import {Http,Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export  class  ForgetPwdService{
  public validateEmailURL = " ";
  constructor(public  http: Http){}
  sendValidationEmail(email: string):Observable<any>{
    return this.http.get(this.validateEmailURL)
      .map((res: Response) => res.json());
  }
}
