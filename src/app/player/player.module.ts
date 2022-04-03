import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ForPlayerComponent } from './pages/for-player/for-player.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';




@NgModule({
  declarations: [
    PlayerPageComponent,
    PlayerTableComponent,
    PlayerCardComponent,
    ForPlayerComponent,
    PruebasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    PlayerPageComponent,
    ForPlayerComponent,

     
  ]
})
export class PlayerModule { }
