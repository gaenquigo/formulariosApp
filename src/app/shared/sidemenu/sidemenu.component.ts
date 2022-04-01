import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  nombre : string,
  ruta : string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listMenuTemplate : MenuItem [] = [ 
    {
      nombre : "Basicos",
      ruta : "template/basicos"
    },
    {
      nombre : "Dínamicos",
      ruta : "template/dinamicos"
    },
    {
      nombre : "Switches",
      ruta : "template/switches"
    }
  ]

  listMenuReactive: MenuItem [] = [ 
    {
      nombre : "Basicos",
      ruta : "reactive/basicos"
    },
    {
      nombre : "Dínamicos",
      ruta : "reactive/dinamicos"
    },
    {
      nombre : "Switches",
      ruta : "reactive/switches"
    }
  ]

  authMenu: MenuItem [] = [ 
    {
      nombre : "Registro",
      ruta : "auth/registro"
    },
    {
      nombre : "Login",
      ruta : "auth/login"
    }
   
  ]


}
