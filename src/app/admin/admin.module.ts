import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { PlayerModule } from '../player/player.module';
import { TablePlayerComponent } from './components/table-player/table-player.component';
import { SidebarBusquedasComponent } from './sidebar-busquedas/sidebar-busquedas.component';
import { RouterModule } from '@angular/router';
import { InputBusquedaComponent } from './components/input-busqueda/input-busqueda.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PanelAdminComponent,
    TablePlayerComponent,
    SidebarBusquedasComponent,
    InputBusquedaComponent
  ],
  imports: [
    CommonModule,
    PlayerModule,
    RouterModule,
    FormsModule
    
  ]
})
export class AdminModule { }
