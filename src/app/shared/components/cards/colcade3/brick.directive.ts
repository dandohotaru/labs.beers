import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'app-brick'
})
export class BrickDirective  {

  constructor(public element: ElementRef) {
  }
}
