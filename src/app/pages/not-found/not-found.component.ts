import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor (public app: MyServiceService) {
    this.app.title = 'Not Found'
  }

}
