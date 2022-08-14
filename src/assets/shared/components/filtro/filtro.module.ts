import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FiltroComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FiltroComponent
  ]
})
export class FiltroModule { }
