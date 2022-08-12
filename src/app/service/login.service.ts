import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  fazerLogin(login: Login): Observable<Login> {
    return this._http.post<Login>('http://localhost:8080/login', login);
  }
}
