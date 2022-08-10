import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../cadastro-usuario/usuario';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private _http: HttpClient) { }

  inserirUsuario(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>('http://localhost:8080/api/usuario/v1', usuario);
  }
}
