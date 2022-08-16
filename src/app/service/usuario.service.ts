import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/assets/shared/model/DTO/UsuarioDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private _http: HttpClient) { }

  buscarDadosPessoais(username:string): Observable<UsuarioDTO> {
    return this._http.get<UsuarioDTO>(environment.urlUsuario+"/username/"+username);
  }
}
