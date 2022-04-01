import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {


  

  constructor(private fb : FormBuilder) { }


  miFormulario : FormGroup = this.fb.group({
    nombre :[ , [ Validators.minLength(3), Validators.required]],
    favoritos : this.fb.array(
    [
      ['Metal Slut'],
      ['Pokemon'],
    ], Validators.required)
  })


  nuevoFavorito : FormControl = this.fb.control('', Validators.required);

  ngOnInit(): void {
  }

  get favoritosArr (){
    return this.miFormulario.get('favoritos') as FormArray;
  }


  campoValido(campo : string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){

    if(this.nuevoFavorito.invalid){return}
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));

    this.nuevoFavorito.reset();

  }

  borrar(index : number){
    this.favoritosArr.removeAt(index);
  }



  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value)

  }

}
