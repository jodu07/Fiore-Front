import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
    
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
