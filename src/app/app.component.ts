import {
  animate,
  animateChild,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('shiftLeft', [
      state('shifted', style({ transform: 'translateX(-100%)', right: 0 })),
      state('default', style({})),
      transition('shifted <=> default', [animate('0s ease')]),
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(100),
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
    trigger('inOutAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: '0' }),
        animate('1s ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('1s ease-out', style({ opacity: '0' })),
      ]),
    ]),
    trigger('stagger', [
      transition(':enter', [query(':enter', stagger('.3s', [animateChild()]))]),
    ]),
  ],
})
export class AppComponent {
  // change to 4 to test trackBy
  shifter = 5;
  tiles = [1, 2, 3, 4];

  trackByFn(tile) {
    return tile;
  }

  shift() {
    this.tiles.shift();
    setTimeout(() => this.tiles.push(this.shifter++), 0);
  }

  add() {
    this.tiles.push(111);
  }

  remove() {
    this.tiles.shift();
  }
}
