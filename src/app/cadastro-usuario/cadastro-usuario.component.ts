import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { Endereco } from './endereco';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  usuario: Usuario = {
    nome: "",
    telefone: "",
    email: "",
    rg: "",
    cpf: "",
    dataNascimento: new Date(),
    dataCadastro: new Date(),
    endereco: new Endereco(),

    tipo: "TUTOR"
  }

  constructor(private service: CadastroUsuarioService, private _enderecoService: EnderecoService) {
    this.usuario = new Usuario();
    this.usuario.dataCadastro = new Date()
    this.usuario.endereco = new Endereco()
    this.usuario.tipo = "TUTOR"
  }

  buscarCep(valor: string, usuarioForm) {
    this._enderecoService.buscarEnderecoService(valor)
      .subscribe((dados) => this.preencheForm(dados, usuarioForm.form));
  }

  preencheForm(dados, form) {
    form.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf,
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
      .inserirUsuario(this.usuario)
      .subscribe( response => console.log(response));

  }
}
