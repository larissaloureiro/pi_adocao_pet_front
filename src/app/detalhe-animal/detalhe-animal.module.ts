import { FiltroModule } from './../../assets/shared/components/filtro/filtro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheAnimalComponent } from './detalhe-animal.component';



@NgModule({
  declarations: [DetalheAnimalComponent],
  imports: [
    CommonModule,
    FiltroModule
  ],
  exports:[
    DetalheAnimalComponent
  ]
})
export class DetalheAnimalModule { }
