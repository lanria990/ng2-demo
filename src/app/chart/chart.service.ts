
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ChartService{
  public chartUrl = 'mock-data/chart.json';

  constructor(public http:Http){}
  public chart(): Observable<any>{
  return this.http.get(this.chartUrl).map((res:Response)=>res.json());
  }
}
