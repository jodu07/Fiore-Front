import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPageComponent } from './player/pages/player-page/player-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NewsPageComponent } from './news/pages/news-page/news-page.component';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';

import { ForPlayerComponent } from './player/pages/for-player/for-player.component';
import { PruebasComponent } from './player/pages/pruebas/pruebas.component';
import { RegisterPlayerComponent } from './player/pages/register-player/register-player.component';


const routes: Routes = [

  {
    path: 'player',
    loadChildren: () => import('./player/player.module').then( m => m.PlayerModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signIn/signin.module').then( m => m.SigninModule)
  },
 /* { 
    path: 'home',
    component: HomePageComponent
  },
  { 
    path: '**',
    redirectTo: 'home'
  }
*/
  /*

  {path:'playerPage' , component: PlayerPageComponent},
  {path:'home' , component: HomePageComponent},  
  {path:'news' , component: NewsPageComponent},
  {path:'admin' , component: PanelAdminComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerPlayer', component: RegisterPlayerComponent},
  {path: 'forPlayer/:idPlayer', component: ForPlayerComponent},
  {path: 'prueba/:idPlayer', component: PruebasComponent},
  {path:'' , component: HomePageComponent, pathMatch:'full'}, 
  {path: '**', redirectTo: ''}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
