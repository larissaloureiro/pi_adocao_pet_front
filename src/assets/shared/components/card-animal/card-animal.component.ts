import { Component, Input, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrls: ['./card-animal.component.scss']
})
export class CardAnimalComponent implements OnInit {
  @Input()
  animal: any;

  constructor() { }

  ngOnInit(): void {
  }

}
