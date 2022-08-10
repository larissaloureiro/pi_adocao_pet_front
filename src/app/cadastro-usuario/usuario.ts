import { Endereco } from "./endereco";

export class Usuario {
  nome: string;
  telefone: string;
  email: string;
  rg: string;
  cpf: string;
  dataNascimento: Date;
  dataCadastro: Date;
  endereco: Endereco;

  tipo: string;

  constructor() {
    this.endereco = new Endereco();
  }

}