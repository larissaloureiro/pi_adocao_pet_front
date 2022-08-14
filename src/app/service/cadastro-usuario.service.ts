import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from '../cadastro-usuario/cadastro';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private _http: HttpClient) { }

  inserirUsuario(cadastro: Cadastro): Observable<Cadastro> {
    return this._http.post<Cadastro>(environment.urlUsuario, cadastro);
  }
}
