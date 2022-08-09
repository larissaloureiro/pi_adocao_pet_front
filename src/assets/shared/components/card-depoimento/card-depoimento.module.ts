import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDepoimentoComponent } from './card-depoimento.component';



@NgModule({
  declarations: [CardDepoimentoComponent],
  imports: [
    CommonModule
  ],exports:[
    CardDepoimentoComponent
  ]
})
export class CardDepoimentoModule { }
