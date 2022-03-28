import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { PlayerModule } from '../player/player.module';
import { TablePlayerComponent } from './table-player/table-player.component';



@NgModule({
  declarations: [
    PanelAdminComponent,
    TablePlayerComponent
  ],
  imports: [
    CommonModule,
    PlayerModule,
    TablePlayerComponent
  ]
})
export class AdminModule { }
