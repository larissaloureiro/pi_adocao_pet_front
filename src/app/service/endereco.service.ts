import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private _http: HttpClient) { }

  buscarEnderecoService(cep: string) {
    return this._http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
