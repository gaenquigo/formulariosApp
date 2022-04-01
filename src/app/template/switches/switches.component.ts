import { Component, OnInit } from '@angular/core';



interface Persona {

  genero : string;
  notificaciones : boolean;
  condiciones : boolean;
}




@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {


  persona : Persona = {
    genero : 'F',
    notificaciones : true,
    condiciones : true
  }
  

  constructor() { }

  ngOnInit(): void {
  }




}
