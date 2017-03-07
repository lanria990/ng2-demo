import {isArray} from "rxjs/util/isArray";
import {error} from "util";
export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  type: string;
  placeholder: string;
  options:Array<T>;
  deprecated:string;
  onSubmit:Function;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    type?: string,
    placeholder?: string,
    options?:Array<T>,

  } = {}){
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.type = options.type || '';
    this.placeholder = options.placeholder || '';
    this.options = options.options;

    //校验
    if(this.type == 'select' && !isArray(this.options)){
      error('form control type:select options must Array[Object]')
    }

    if (this.type === 'submit') {
      this.onSubmit = function(arg) {
        // $scope.onSubmitHandle.call(null, arg)
      }
    }
  }
}
