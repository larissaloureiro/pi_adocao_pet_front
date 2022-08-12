import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardDepoimentoModule } from 'src/assets/shared/components/card-depoimento/card-depoimento.module';
import { CardAnimalModule } from 'src/assets/shared/components/card-animal/card-animal.module';
import { BannerComponent } from '../banner/banner.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    CardAnimalModule,
    CardDepoimentoModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
