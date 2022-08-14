import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ContatoComponent } from './contato/contato.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { LoginComponent } from './login/login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { QueroDoarComponent } from './quero-doar/quero-doar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'lista-animais', component: ListaAnimaisComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'quero-doar', component: QueroDoarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
