import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ForPlayerComponent } from './pages/for-player/for-player.component';



@NgModule({
  declarations: [
    PlayerPageComponent,
    PlayerTableComponent,
    PlayerCardComponent,
    ForPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlayerPageComponent,
     
  ]
})
export class PlayerModule { }
