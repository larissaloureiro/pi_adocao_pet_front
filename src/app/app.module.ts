import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { QueroDoarComponent } from './quero-doar/quero-doar.component';

import { CadastroAnimalModule } from './cadastro-animal/cadastro-animal.module';
import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { DetalheAnimalModule } from './detalhe-animal/detalhe-animal.module';
import { FiltroModule } from 'src/assets/shared/components/filtro/filtro.module';
import { HomeModule } from './home/home.module';
import { ListaAnimaisModule } from './lista-animais/lista-animais.module';
import { AreaUsuarioComponent } from './area-usuario/area-usuario.component';
import { RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { TemplateModule } from './template/template.module';

import { MinhasAdocoesComponent } from './minhas-adocoes/minhas-adocoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    FaqComponent,
    QuemSomosComponent,
    QueroDoarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CadastroAnimalModule,
    CadastroUsuarioModule,
    DetalheAnimalModule,
    FiltroModule,
    TemplateModule,
    HomeModule,
    ListaAnimaisModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }