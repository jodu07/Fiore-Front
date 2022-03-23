import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';



@NgModule({
  declarations: [
    PlayerPageComponent,
    PlayerTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlayerModule { }
