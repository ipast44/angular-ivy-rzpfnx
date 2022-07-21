import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() item: string | number;
}
