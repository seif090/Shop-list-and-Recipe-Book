import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {
  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver){}
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  private closeSub: Subscription;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form : NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      });
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
          this.isLoading = false;
        }
      );


      form.reset();
    }
  }
  onHandleError() {
    this.error = null;
  }
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  private showErrorAlert(message: string) {
   const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
   const hostViewContainerRef = this.alertHost.viewContainerRef;
   hostViewContainerRef.clear();
   const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
   componentRef.instance.message = message;
   this.closeSub = componentRef.instance.close.subscribe(() => {
     this.closeSub.unsubscribe();
     hostViewContainerRef.clear();
   });
  }

}
