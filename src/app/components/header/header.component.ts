import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (public app: MyServiceService) {
    this.app.title = 'Home'
  }
}
// service - это общее хранилище, которое мы можем использовать для разных данных
