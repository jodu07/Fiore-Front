import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavbarComponent,
    NavbarLoginComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    NavbarLoginComponent,
    SidebarComponent,
    FooterComponent
  ]

})
export class SharedModule { }
