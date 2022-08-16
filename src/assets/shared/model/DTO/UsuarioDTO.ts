import { EnderecoDTO } from "./EnderecoDTO";

export class UsuarioDTO{
	nome : string;
	telefone : string;
	email : string;
	rg : string;
	cpf : string;
	dataNascimento : string;
	endereco : EnderecoDTO;
	dataCadastro : string;
}