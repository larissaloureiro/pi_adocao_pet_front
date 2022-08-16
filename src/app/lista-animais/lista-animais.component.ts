import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.scss']
})
export class ListaAnimaisComponent implements OnInit {
  paginaAtual: number = 1;

  constructor(private _route: ActivatedRoute, public animalService: AnimalService) { }

  ngOnInit(): void {
    this._route.params.subscribe(async (params) => {
      if (!!params.especie) {
        await this.animalService.carregarAnimalPorEspecie(params.especie);
      } else {
        await this.animalService.carregarAnimais();
      }
    })
  }
}
