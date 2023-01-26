import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayerModule } from './player/player.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { SigninModule } from './signIn/signin.module';
import { PageShopComponent } from './shop/pages/page-shop/page-shop.component';
import { PageFixturesComponent } from './shop/pages/page-fixtures/page-fixtures.component';



@NgModule({
  declarations: [
    AppComponent,
    PageShopComponent,
    PageFixturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlayerModule,
    SharedModule,
    HomeModule,
    AdminModule,
    SigninModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
