import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-usuario',
  templateUrl: './area-usuario.component.html',
  styleUrls: ['./area-usuario.component.scss']
})
export class AreaUsuarioComponent implements OnInit {

  opcaoMenu: string;

  constructor() { }

  alteraMenu(value) {
    this.opcaoMenu=value;
  }


  ngOnInit(): void {
  }

}