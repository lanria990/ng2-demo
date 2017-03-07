

import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
@Component({
  selector:'form-control',
  templateUrl:'form-control.component.html'
})

export  class  FormControlComponent implements OnInit{
  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  constructor(){}
  ngOnInit(){}
}
