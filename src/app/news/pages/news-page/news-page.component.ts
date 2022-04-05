import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {


  listNews: News[]=[];

  constructor( private _newsService: NewsService,    
               ) { }

  listarNoticias(){
    this._newsService.getNews()
    .subscribe( (res:any) => {
      console.log(res);
      this.listNews = res.articles;  
      this.listNews = this.listNews.splice(0,10);    
    },
     err => console.log(err)
    );
  }             

  ngOnInit(): void {

    this.listarNoticias();
    
  }

}
