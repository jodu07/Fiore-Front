import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeSigninComponent } from './pages/home-signin/home-signin.component';
import { SigninRoutingModule } from './signin-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeSigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SigninRoutingModule
    
  ],


  providers: [
    //JWT
    {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService,
    //Token interceptor
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}
 ]
})
export class SigninModule { }
