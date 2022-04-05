import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CardNewsComponent } from './components/card-news/card-news.component';



@NgModule({
  declarations: [
    NewsPageComponent,
    CardNewsComponent
  ],
  exports: [
    NewsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
