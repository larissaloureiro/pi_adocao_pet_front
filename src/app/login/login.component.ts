import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = {
    username: "",
    senha: ""

  }

  constructor(private service: LoginService) {
    this.login = new Login();
  
  }
    
  ngOnInit(): void {
  }

  onSubmit() {
    this.service
      .fazerLogin(this.login)
      .subscribe( response => console.log(response));

  }
}
