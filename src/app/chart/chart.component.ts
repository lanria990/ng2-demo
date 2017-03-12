import {Component, OnInit} from "@angular/core";
import {ChartService} from "./chart.service";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  public charData = {
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res) {
          console.log(res);
        }
      }
    ],
    title: {
      text: 'NiceFish访问用户地区分布',
      subtext: '纯属虚构',
      x: 'center'
    }
    ,
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    }
    ,
    legend: {
      orient: 'vertical',
      left: 'left',
      data: []
    }
    ,
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }

  constructor(public  chartService: ChartService) {
  }

  ngOnInit() {
    this.chartService.chart().subscribe(data => {
      this.charData.series[0].data = data;
      this.charData.legend.data = data.map(item => item.name);
      console.log('charData', this.charData)
    }, error => console.log('sync chart', error));
  }
}
