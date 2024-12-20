import {Directive, ViewContainerRef} from "@angular/core";
import {AlertComponent} from "../alert/alert.component";
@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {
      // This directive will be applied to elements with 'appPlaceholder' attribute.
      // When this directive is used, Angular will create a comment node in the DOM and attach it to the view container.
      this.viewContainerRef.createComponent(AlertComponent);
    }
}
