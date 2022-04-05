import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {


  @Input() listNews: News[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
