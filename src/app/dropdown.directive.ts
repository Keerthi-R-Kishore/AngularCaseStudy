import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
