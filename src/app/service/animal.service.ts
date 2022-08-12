import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animais = []

  constructor(public httpClient: HttpClient) {
    this.carregarAnimais();
  }

  async carregarAnimais() {
    const requisicao = await this.httpClient
      .get<any>('http://localhost:8080/api/animal/v1/')
      .toPromise();
    this.animais = requisicao._embedded.animalVOList;
  }
}
