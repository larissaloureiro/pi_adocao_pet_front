import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnimalComponent } from './card-animal.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CardAnimalComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports:[
    CardAnimalComponent
  ]
})
export class CardAnimalModule { }
