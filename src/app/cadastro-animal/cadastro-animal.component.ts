import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Animal } from './animal';

@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.component.html',
  styleUrls: ['./cadastro-animal.component.scss']
})
export class CadastroAnimalComponent implements OnInit {
  animal: Animal = {
    nome: "",
    raca: "",
    especie: "",
    descricao: "",
    porte: "",
    idade: 0,
    sexo: "",
    fotoBase64: "",
    dataCadastro: new Date(),
    disponivel: true,
    infAdicionais: ""
  }

  constructor(private service: AnimalService) {
    this.animal = new Animal();
    this.animal.dataCadastro = new Date();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
      .inserirAnimal(this.animal)
      .subscribe( response => console.log(response));
  }
}
