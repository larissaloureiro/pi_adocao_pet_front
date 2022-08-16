import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from 'src/assets/shared/model/DTO/UsuarioDTO';
import { UsuarioFilterService } from '../service/usuario-filter.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-area-usuario',
  templateUrl: './area-usuario.component.html',
  styleUrls: ['./area-usuario.component.scss']
})
export class AreaUsuarioComponent implements OnInit {

  opcaoMenu: string;

  usuario : UsuarioDTO = new UsuarioDTO();
  username = "";
  permissoes = "";
  constructor(private httpUsuario : UsuarioService,
            private router : Router,
            private filterUsuario : UsuarioFilterService) { }

  alteraMenu(value) {
    this.opcaoMenu=value;
  }


  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.permissoes = localStorage.getItem("permissoes");
    if(this.username == null){
      this.router.navigate(['/login']);
    }else{

      this.httpUsuario.buscarDadosPessoais(this.username).subscribe(resp =>{
        this.usuario = resp;
        console.log(resp)
        //this.filterUsuario.idUsuario = resp.id;
      })
    }
  }

  logout(){
    localStorage.clear();
    
    this.router.navigate(['/login']);
  }

}
