import {Directive, OnInit, Input, ElementRef, HostListener} from "@angular/core";
import * as echarts from 'echarts';

@Directive({
  selector:'echart'
})

export  class EchartsAppDirective implements OnInit{

  // @Input('option') option:any;
  @Input('option') set option(opt:any){
    console.log('set',opt)
    opt = opt ||{};
    opt.chart = opt.chart ||{};
    opt.chart.renderTo = this.el;
    if (!this.chart){
      this.chart = echarts.init(this.el.nativeElement);
      this.chart.setOption(opt);
    }else{
      this.chart.setOption(opt);
    }
  }
  public  chart:any;
  constructor(private el: ElementRef) {}
  //
  public ngOnInit() {
    // echarts.init(this.el.nativeElement).setOption(this.option);
  }

  ngOnDestroy(){
    this.chart && this.chart.destroy();
  }
}
