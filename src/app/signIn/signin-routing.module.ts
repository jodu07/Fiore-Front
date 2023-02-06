import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSigninComponent } from './pages/home-signin/home-signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: '',

    component: HomeSigninComponent,

    children: [
      {path: 'register', component: RegisterComponent },
      {path: 'login', component: LoginComponent},

    //  { path: '**', redirectTo: 'plantilla' },     
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
export class SigninRoutingModule { }
