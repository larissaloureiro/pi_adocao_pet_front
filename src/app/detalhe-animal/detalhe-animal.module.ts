import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheAnimalComponent } from './detalhe-animal.component';



@NgModule({
  declarations: [DetalheAnimalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DetalheAnimalComponent
  ]
})
export class DetalheAnimalModule { }
