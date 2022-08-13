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
import { HomeModule } from './home/home.module';
import { ListaAnimaisModule } from './lista-animais/lista-animais.module';
import { LoginModule } from './login/login.module';
import { TemplateModule } from './template/template.module';



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
    TemplateModule,
    HomeModule,
    ListaAnimaisModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }