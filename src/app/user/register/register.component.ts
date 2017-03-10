import {Component, OnInit} from "@angular/core";
import {RegisterService} from "./register.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../model/user-model";
import {Router} from "@angular/router";
import {error} from "util";
@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo: User = new User();
  public formErrors = {
    'userName': '',
    'nickName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'formError': '',
    'vcode': ''
  }

  public validationMessages = {
    'userName': {
      'required': '用户名必须输入',
      'maxlength': '用户名最多32个字符',
      'minlength': '用户名4到32个字符'
    },
    'nickName': {
      'required': '昵称必须输入。',
      'maxlength': '用户名最多32个字符',
      'minlength': '昵称2到32个字符。'
    },
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。',
      'maxlength': '密码最多要20位',
      'validateEqual': "两次输入的密码不一致。"
    },
    'confirmPassword': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'maxlength': '密码最多要20位',
      'validateEqual': "两次输入的密码不一致。"
    },
    'vcode': {
      'required': '验证码必须输入。',
      'minlength': '4位验证码',
      'maxlength': '4位验证码'
    },
  }

  constructor(public registerService: RegisterService, private fb: FormBuilder, public router: Router) {
  }

  public  buildForm(): void {
    this.userForm = this.fb.group({
      'userName': [
        this.userInfo.userName, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
        ]
      ],
      'nickName': [
        this.userInfo.nickName, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32),
        ]
      ],
      'email': [
        this.userInfo.email, [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$'),
        ]
      ],
      'password': [
        this.userInfo.password, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]
      ],
      'confirmPassword': [
        this.userInfo.confirmPassword, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]
      ]
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  ngOnInit() {
    this.buildForm();
  }

  public  doRegister() {
    if (this.userForm.valid) {
      this.userInfo = this.userForm.value;
      this.registerService.register(this.userInfo).subscribe(data => {
        this.router.navigateByUrl('login')
      }, error => {
        this.formErrors.formError = error.message;
        console.log(error);
      })
    } else {
      this.formErrors.formError = '存在不合法的输入项，请检查';
    }
  }

  public  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }

    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  public  validEmail() {
    let email = this.userForm.get('email').value;
    this.registerService.validEmail(email).subscribe(data => {
      console.log(data);
    }, error => {
      console.error(error);
    })
  }
}
