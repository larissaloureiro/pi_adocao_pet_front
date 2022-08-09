import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {

  @Input()
  nomeAnimal: string;

  @Input()
  descricaoAnimal: string;

  @Input()
  link: string;

  @Input()
  imagemAnimal: string;

  @Input()
  background: string;

  constructor() { }


  ngOnInit(): void {
  }

}
