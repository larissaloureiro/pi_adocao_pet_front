import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login;

  constructor(private service: LoginService, private router:Router) {
    this.login = new Login();
  
  }
    
  ngOnInit(): void {
    if(localStorage.getItem("username") != null){
      this.router.navigate(['/area-usuario']);
    }
  }

  onSubmit() {
    this.service
      .fazerLogin(this.login)
      .subscribe( response => 
        {
          if(response == null){
            alert("Login ou senha invalidos");
          }else{
            localStorage.setItem("username",response.username)
            localStorage.setItem("permissoes",response.permissoes.toString())
            this.router.navigate(['/area-usuario']);
          }
        }
        );

  }
}