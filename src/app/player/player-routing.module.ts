import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { ForPlayerComponent } from './pages/for-player/for-player.component';
import { RegisterPlayerComponent } from './pages/register-player/register-player.component';

const routes: Routes = [
  {

    path: '',

    children:[
      { path: 'plantilla', component: PlayerPageComponent },
      {path: 'forPlayer/:idPlayer', component: ForPlayerComponent},
      {path: 'registerPlayer', component: RegisterPlayerComponent},
      
    ]

  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],  
  exports: [
      RouterModule
    ]
  
})
export class PlayerRoutingModule { }
