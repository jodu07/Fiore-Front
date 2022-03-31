import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private url='http://localhost:3000';

  

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) {  }


getUser():Observable<User>{
  return this.http.get<User>('/signin');
}



  signIn(user: User){

    return this.http.post(`${this.url}/signin/signin`, user);
    
  }

  isAuth():Boolean{
    const token: any= localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || localStorage.getItem('token')){
      return false;
    }
    return true;
  }

}
