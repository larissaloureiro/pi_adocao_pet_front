import { Animal } from './../cadastro-animal/animal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.scss']
})
export class DetalheAnimalComponent implements OnInit {
  animal: Animal = new Animal();

  constructor(private _route: ActivatedRoute, public animalService: AnimalService) { }

  ngOnInit(): void {
    this._route.params.subscribe(async (params) => {
      const id = params.id;
      this.animal = await this.animalService.carregarAnimalPorId(id);
    })
  }

}
