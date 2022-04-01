import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre : string ;
  favoritos : Favoritos[]
}

interface Favoritos{
  id : number;
  favorito : string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }


  game : string = '';

  persona : Persona = {
    'nombre' : 'gabriel',
    'favoritos' : [
      {
        id :  1,
        favorito : 'fifa'
      },
      {
        id : 2,
        favorito : 'Matal slut'
      }
    ]
  }


  eliminar(index : number){

    this.persona.favoritos.splice(index , 1);
  }

  agregarFavorito(){

    const gamefavoprito : Favoritos = {
      id : this.persona.favoritos.length,
      favorito : this.game
    }
    console.log(gamefavoprito)
    this.persona.favoritos.push(gamefavoprito)
  }


  guardar(miFormulario : NgForm){
    console.log("posteado correcto");

    console.log(miFormulario.controls['errors']);
    console.log(miFormulario);

  }
}
