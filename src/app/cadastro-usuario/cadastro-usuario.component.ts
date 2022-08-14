import { Component, OnInit } from '@angular/core';

import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { EnderecoService } from '../service/endereco.service';
import { UsuarioVO } from './usuarioVO';
import { Endereco } from './endereco';
import { LoginVO } from './loginVO';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  confirmaSenha: string;
  senhasIguais: boolean;

  cadastro: Cadastro;

  usuarioVO: UsuarioVO = {
    nome: "",
    telefone: "",
    email: "",
    rg: "",
    cpf: "",
    dataNascimento: new Date(),
    dataCadastro: new Date(),
    endereco: new Endereco()
  }

  loginVO: LoginVO = {
    username: "",
    password: ""
  }

  constructor(private service: CadastroUsuarioService, private _enderecoService: EnderecoService) {
    this.usuarioVO = new UsuarioVO();
    this.usuarioVO.dataCadastro = new Date()
    this.usuarioVO.endereco = new Endereco()
  }

  validaSenha(value){
    if(this.loginVO.password == this.confirmaSenha){
      this.senhasIguais = true
    }else{
      this.senhasIguais = false
    }
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
    if (this.senhasIguais) {
      this.cadastro.usuarioVO = this.usuarioVO;
      this.cadastro.loginVO = this.loginVO;

      this.service
        .inserirUsuario(this.cadastro)
        .subscribe( response => console.log(response));
    } else {
      console.log("Existem campos incorretos.");
    }
    
  }
}
