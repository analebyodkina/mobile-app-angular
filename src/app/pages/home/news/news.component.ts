import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  // ЭТО МЫ ИМИТИРУЕМ КАКОЙ-ТО МАССИВ ДАННЫХ
  news = [
    {
      name: 'news 1'
    },
    {
      name: 'news 2'
    },
    {
      name: 'news 3'
    },
    {
      name: 'news 4'
    }
  ]

}
