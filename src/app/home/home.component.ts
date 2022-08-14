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
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi in risus volutpat tincidunt quis. Duis venenatis mollis convallis velit purus mattis at orci mauris. Aliquet molestie ut praesent et vel pulvinar ornare amet in. Orci faucibus rhoncus ornare sit laoreet scelerisque rhoncus.",
      notaAvaliacao: 4
    },
    {
      foto: "",
      nome: "Flavia Carvalho",
      subtitulo: "Tutora do Thor",
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi in risus volutpat tincidunt quis. Duis venenatis mollis convallis velit purus mattis at orci mauris. Aliquet molestie ut praesent et vel pulvinar ornare amet in. Orci faucibus rhoncus ornare sit laoreet scelerisque rhoncus.",
      notaAvaliacao: "5"
    }
  ]

  constructor(public animalService: AnimalService) { }

  ngOnInit(): void { }

}
