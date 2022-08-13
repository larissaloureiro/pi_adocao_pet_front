import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { QueroDoarComponent } from './quero-doar/quero-doar.component';

import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';
import { TemplateModule } from './template/template.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ListaAnimaisModule } from './lista-animais/lista-animais.module';
import { AreaUsuarioComponent } from './area-usuario/area-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    FaqComponent,
    QuemSomosComponent,
    QueroDoarComponent,
    AreaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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