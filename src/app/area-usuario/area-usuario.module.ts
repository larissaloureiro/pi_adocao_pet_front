import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaUsuarioComponent } from './area-usuario.component';
import { MinhasAdocoesComponent } from '../minhas-adocoes/minhas-adocoes.component';
import { CadastroAnimalModule } from '../cadastro-animal/cadastro-animal.module';

@NgModule({
  declarations: [AreaUsuarioComponent,
                MinhasAdocoesComponent],
  imports: [
    CommonModule,
    CadastroAnimalModule
  ],

  exports: [
    AreaUsuarioComponent
  ]

})

export class AreaUsuarioModule { }
