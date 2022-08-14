import { Endereco } from "./endereco";

export class UsuarioVO {
  nome: string;
  telefone: string;
  email: string;
  rg: string;
  cpf: string;
  dataNascimento: Date;
  dataCadastro: Date;
  endereco: Endereco;

  constructor() {
    this.endereco = new Endereco();
  }

}
