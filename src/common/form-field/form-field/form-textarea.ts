
import {FieldBase} from "./field-base";
export class TextArea extends FieldBase<string> {
  type = 'textarea';
  rows: number;

  constructor(options: {} = {}) {
    super(options);
    this.rows = options['rows'] || 1;
  }
}
