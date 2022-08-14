import { Component, OnInit } from '@angular/core';

import { CadastroUsuarioService } from '../service/cadastro-usuario.service';
import { EnderecoService } from '../service/endereco.service';
import { UsuarioVO } from './usuarioVO';
import { Endereco } from './endereco';
import { LoginVO } from './loginVO';
import { Cadastro } from './cadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  confirmaSenha: string;
  senhasIguais: boolean = true;
  cpfValido: boolean = true;

  cadastro: Cadastro = new Cadastro();

  usuarioVO: UsuarioVO = {
    nome: '',
    telefone: '',
    email: '',
    rg: '',
    cpf: '',
    dataNascimento: new Date(),
    dataCadastro: new Date(),
    endereco: new Endereco(),
  };

  loginVO: LoginVO = {
    username: '',
    password: '',
  };

  constructor(
    private service: CadastroUsuarioService,
    private _enderecoService: EnderecoService,
    private router: Router
  ) {
    this.usuarioVO = new UsuarioVO();
    this.usuarioVO.dataCadastro = new Date();
    this.usuarioVO.endereco = new Endereco();
  }

  validaSenha(value) {
    if (this.loginVO.password == this.confirmaSenha) {
      this.senhasIguais = true;
    } else {
      this.senhasIguais = false;
    }
  }

  validaCpf(cpf: string) {
    cpf = cpf.replace(/\D+/, '');
    this.cpfValido = false;
    if (cpf.length != 11) {
      return;
    }

    let numeros: string = cpf.substring(0, 9);
    let digitos: string = cpf.substring(9);

    let soma: number = 0;
    for (let i = 10; i > 1; i--) {
      soma += parseInt(numeros.charAt(10 - i)) * i;
    }
    let resultado: number = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != parseInt(digitos.charAt(0))) {
      return;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);
    for (let k = 11; k > 1; k--) {
      soma += parseInt(numeros.charAt(11 - k)) * k;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != parseInt(digitos.charAt(1))) {
      return;
    }

    this.cpfValido = true;
  }

  buscarCep(valor: string, usuarioForm) {
    this._enderecoService
      .buscarEnderecoService(valor)
      .subscribe((dados) => this.preencheForm(dados, usuarioForm.form));
  }

  preencheForm(dados, form) {
    form.patchValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      localidade: dados.localidade,
      uf: dados.uf,
    });
  }

  ngOnInit(): void {}

  onSubmit(usuarioForm: any){
    if (
      this.senhasIguais &&
      this.cpfValido &&
      usuarioForm.valid
    ) {
      this.cadastro.usuarioVO = this.usuarioVO;
      this.cadastro.loginVO = this.loginVO;

      this.service
        .inserirUsuario(this.cadastro)
        .subscribe((response) => console.log(response));
      this.router.navigate(['/login']);
    } else {
      alert('Existem campos inválidos.');
    }
  }
}
