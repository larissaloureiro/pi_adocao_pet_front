import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { FiltroModule } from 'src/assets/shared/components/filtro/filtro.module';
import { ListaAnimaisComponent } from './lista-animais.component';
import { CardAnimalModule } from 'src/assets/shared/components/card-animal/card-animal.module';

@NgModule({
  declarations: [
    ListaAnimaisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardAnimalModule,
    FiltroModule,
    NgxPaginationModule
  ],
  exports: [
    ListaAnimaisComponent
  ]
})
export class ListaAnimaisModule { }
