import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../cadastro-animal/animal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animais = []

  constructor(public _http: HttpClient) {
    this.carregarAnimais();
  }

  inserirAnimal(animal: Animal): Observable<Animal> {
    return this._http.post<Animal>(environment.urlAnimal, animal);
  }

  async carregarAnimais() {
    const requisicao = await this._http
      .get<any>(environment.urlAnimal)
      .toPromise();
    this.animais = requisicao._embedded.animalVOList;
  }

  async carregarAnimalPorId(id: number) {
    const requisicao = await this._http
      .get<any>(environment.urlAnimal + id)
      .toPromise();
    return requisicao;
  }

  async carregarAnimalPorEspecie(especie: string) {
    const requisicao = await this._http
      .get<any>(environment.urlAnimal + 'especie/' + especie)
      .toPromise();
    this.animais = []
    this.animais = requisicao._embedded.animalVOList;
  }
}
