import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerModule } from './player/player.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';







@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlayerModule,
    SharedModule,
    HomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
