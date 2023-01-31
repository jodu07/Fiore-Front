import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayerRoutingModule } from './player-routing.module';

import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ForPlayerComponent } from './pages/for-player/for-player.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { RegisterPlayerComponent } from './pages/register-player/register-player.component';
import { HomePlayerComponent } from './pages/home-player/home-player.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HistorialPageComponent } from './pages/historial-page/historial-page.component';



@NgModule({
  declarations: [
    PlayerPageComponent,
    PlayerTableComponent,
    PlayerCardComponent,
    ForPlayerComponent,
    PruebasComponent,
    RegisterPlayerComponent,
    HomePlayerComponent,
    HistorialComponent,
    HistorialPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PlayerRoutingModule
  ],
  exports:[
    PlayerPageComponent,
    ForPlayerComponent,     
  ]
})
export class PlayerModule { }
