import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { QueroDoarComponent } from './quero-doar/quero-doar.component';

import { CadastroUsuarioModule } from './cadastro-usuario/cadastro-usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    ContatoComponent,
    QueroDoarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CadastroUsuarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }