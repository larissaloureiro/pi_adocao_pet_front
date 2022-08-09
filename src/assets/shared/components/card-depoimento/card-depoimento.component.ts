import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent implements OnInit {

  @Input()
  imgPerfil: string;

  @Input()
  cardTitle: string;

  @Input()
  cardSubtitle: string;

  @Input()
  cardText: string;

  @Input()
  notaAvaliacao: number;

  constructor() { }

  ngOnInit(): void {
  }

}
