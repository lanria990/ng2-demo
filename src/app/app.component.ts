import {Component, Renderer, ElementRef} from '@angular/core';
import {Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, RouterState} from "@angular/router";
import {LoginService} from "./user/login/login.service";
import {User} from "./user/model/user-model";
import {RegisterService} from "./user/register/register.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public currentUser: User;
  private globalClickCallbackFn: Function;

  constructor(public elementRef: ElementRef,
              public renderer: Renderer,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public loginService: LoginService,
              public registerService:RegisterService
  ) {
  }

  ngOnInit() {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("全局监听点击事件>" + event);
    });
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log('currentUser1',this.currentUser)
    this.loginService.currentUser.merge(this.registerService.currentUser).subscribe(
      data => {
        this.currentUser = data;
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);

        //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
        if (routerStateSnapshot.url.indexOf("/login") != -1) {
          this.router.navigateByUrl("/home");
        }
      },
      error => console.error(error)
    );

    console.log('currentUser',this.currentUser)
  }

  ngOnDestroy() {
    if (this.globalClickCallbackFn) {
      this.globalClickCallbackFn();
    }
  }

  public doLogout():void{
    // LocalStorage
    this.loginService.logout();
    this.router.navigateByUrl('');
  }
}
