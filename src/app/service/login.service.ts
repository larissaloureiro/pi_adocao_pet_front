import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login/login';
import { environment } from 'src/environments/environment';
import { LoginDTO } from 'src/assets/shared/model/DTO/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private _http: HttpClient) { }

  fazerLogin(login: Login): Observable<LoginDTO> {
    return this._http.post<LoginDTO>(environment.urlAuth, login);
  }
}