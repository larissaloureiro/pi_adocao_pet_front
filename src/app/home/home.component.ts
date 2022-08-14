import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  depoimentos = [
    {
      foto: "",
      nome: "Carlos Alberto",
      subtitulo: "Tutor da Maria",
      texto: "A adaptação com a família foi na hora! Todos se apaixonaram pela gatinha de início. O amor só cresceu e ela é o bebê da casa. O processo de adoção foi bem fácil. Recebi orientação para telar a minha casa, logo depois a ONG liberou a adoção.",
      notaAvaliacao: 4
    },
    {
      foto: "",
      nome: "Flavia Carvalho",
      subtitulo: "Tutora do Thor",
      texto: "Quando adotei recebi as orientações para a adaptação do pet. Por ser um ambiente novo, o começo da adaptação foi um pouco receosa para o pet, mas depois de alguns dias, ele já estava bem tranquilo.",
      notaAvaliacao: "5"
    }
  ]

  constructor(public animalService: AnimalService) { }

  ngOnInit(): void { }

}
