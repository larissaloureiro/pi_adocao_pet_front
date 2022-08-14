import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroAnimalComponent } from './cadastro-animal.component';

@NgModule({
  declarations: [
    CadastroAnimalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CadastroAnimalComponent
  ],
})
export class CadastroAnimalModule { }
