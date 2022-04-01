import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //opcion de formularios reactivos con FormControl
  // miFormulario : FormGroup =  new FormGroup({
  //   'nombre' : new FormControl("Gforse 411"),
  //   'precio' : new FormControl(1500),
  //   'existencias' : new FormControl(5)
  // })


  ngOnInit(): void {

    this.miFormulario.reset({
      nombre : 'Envidia 500',
      precio : 1500
    })
     
    
  }


  

  constructor(private fb : FormBuilder) { }

    // Formularios reactivos con FormBuilder pero se debe injectar el servicio FormBuilder
  miFormulario : FormGroup = this.fb.group({
    nombre      : [, [Validators.required, Validators.minLength(3)]],
    precio      : [, [Validators.min(0), Validators.required]],
    existencias : [, [Validators.min(0), Validators.required]]
  })


  campoNoValido(campo : string){

    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;

  }

  //para validar todos los campos al guardar

  guardar(){

    console.log(this.miFormulario.value)

    console.log(this.miFormulario.invalid)

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    this.miFormulario.reset();


  }

}
