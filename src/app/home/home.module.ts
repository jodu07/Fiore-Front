import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsModule } from '../news/news.module';
import { PlayerModule } from '../player/player.module';




@NgModule({
  declarations: [
    HomePageComponent      
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
