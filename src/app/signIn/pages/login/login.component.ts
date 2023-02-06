import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    idUser: 1,
    nameUser: 'jo@du',
    password: '123'
  }

  listUser: User[] = [];

  constructor( private _authService: AuthService,
              private router: Router) { }


list(){
    this._authService.getUser()
    .subscribe( res => {
      console.log(res);
      this.listUser=<any>res;
      console.log(this.listUser);
    },
    err => console.log(err)
    );
      
  }           

  logIn(){

    console.log(this.user);
    this._authService.signIn(this.user)
    .subscribe( (res:any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['admin']);
    });
    
  }

  ngOnInit(): void {
  }

}
