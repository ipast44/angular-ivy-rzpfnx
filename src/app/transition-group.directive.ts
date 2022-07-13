import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTransitionItemGroup]',
})
export class TransitionGroupItemDirective {
  prevPos: any;
  newPos: any;
  el: HTMLElement;
  moved: boolean = false;
  moveCallback: any;

  constructor(elRef: ElementRef) {
    this.el = elRef.nativeElement;
  }
}
