import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaUsuarioComponent } from './area-usuario.component';
import { MinhasAdocoesComponent } from '../minhas-adocoes/minhas-adocoes.component';

@NgModule({
  declarations: [AreaUsuarioComponent,
                MinhasAdocoesComponent],
  imports: [
    CommonModule,
  ],

  exports: [
    AreaUsuarioComponent
  ]

})

export class AreaUsuarioModule { }
