import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsModule } from '../news/news.module';
import { PlayerModule } from '../player/player.module';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [
    HomePageComponent,
    CardComponent      
  ],
  imports: [
    CommonModule,
    NewsModule,
    PlayerModule
  ],
  exports:[
    HomePageComponent    
  ]
})

export class HomeModule { }
