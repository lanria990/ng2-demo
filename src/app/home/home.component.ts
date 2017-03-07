
import {Component, OnInit} from "@angular/core";
import {flyIn} from "../animations/fyl-in";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.scss'],
  animations:[
    flyIn
  ]
})

export  class  HomeComponent implements OnInit{
  constructor(){}
  ngOnInit(){}
}
