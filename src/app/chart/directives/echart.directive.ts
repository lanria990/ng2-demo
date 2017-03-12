import {Directive, OnInit, Input, ElementRef, SimpleChanges} from "@angular/core";
import * as echarts  from  'echarts';

@Directive({
  selector:'echart'
})

export  class EchartsAppDirective implements OnInit{
  @Input('option') option:any;
  public  chart:any;
  constructor(private  el :ElementRef){}
  ngOnInit(){
    this.chart = echarts.init(this.el.nativeElement);
    this.chart.setOption(this.option);
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('changes',changes,this.chart )
    this.chart  && this.chart.setOption(this.changes.option.currentValue);
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }
}
