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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate('.3s', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class ProfileComponent {
  public name = '';
  public toggle: boolean = false;
  constructor (public app: MyServiceService) {
    this.app.title = 'Profile'
  }
  

}
