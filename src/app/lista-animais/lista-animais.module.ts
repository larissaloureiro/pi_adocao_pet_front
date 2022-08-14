import { FiltroModule } from 'src/assets/shared/components/filtro/filtro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAnimaisComponent } from './lista-animais.component';
import { RouterModule } from '@angular/router';
import { CardAnimalModule } from 'src/assets/shared/components/card-animal/card-animal.module';



@NgModule({
  declarations: [
    ListaAnimaisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardAnimalModule,
    FiltroModule
  ],
  exports: [
    ListaAnimaisComponent
  ]
})
export class ListaAnimaisModule { }
