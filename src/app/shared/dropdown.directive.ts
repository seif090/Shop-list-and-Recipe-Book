import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'  // This is an attribute selector. The directive is applied to elements with 'appDropdown' attribute.
})
export class DropdownDirective{
 @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
