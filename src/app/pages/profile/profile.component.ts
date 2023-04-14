import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],  
})

export class ProfileComponent {
  public name = '';
  public toggle: boolean = false;
  constructor (public app: MyServiceService) {
    this.app.title = 'Profile'
  } 

}
