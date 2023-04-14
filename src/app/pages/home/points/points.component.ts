import { Component } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition,
  } from '@angular/animations';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('.3s', style({ 
          opacity: 1,
          transform: 'translateY(0)'
        })),
      ]),
      transition('* => void', [
        animate('.3s', style({ 
          opacity: 0,
          transform: 'translateY(-10px)'
        })),
      ]),
    ])
  ]
})
export class PointsComponent {
  public toggle: boolean = false;
  public unfold: boolean = false;

}
