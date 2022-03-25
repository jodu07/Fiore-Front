import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './player/pages/player-page/player-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NewsPageComponent } from './news/pages/news-page/news-page.component';


const routes: Routes = [

  {path:'playerPage' , component: PlayerPageComponent},
  {path:'home' , component: HomePageComponent},  
  {path:'news' , component: NewsPageComponent},
  {path:'' , component: HomePageComponent, pathMatch:'full'}, 
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
