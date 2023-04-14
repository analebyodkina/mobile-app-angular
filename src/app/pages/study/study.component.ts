import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  } from '@angular/animations';


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss'],
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
export class StudyComponent {
  public name = '';
  public toggle: boolean = false;
  constructor (public app: MyServiceService) {
    this.app.title = 'Study'
  }

}
