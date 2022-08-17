import { FiltroModule } from './../../assets/shared/components/filtro/filtro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheAnimalComponent } from './detalhe-animal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DetalheAnimalComponent],
  imports: [
    CommonModule,
    FiltroModule,
    RouterModule
  ],
  exports:[
    DetalheAnimalComponent
  ]
})
export class DetalheAnimalModule { }
