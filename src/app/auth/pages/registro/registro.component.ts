import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidadorService } from 'src/app/shared/validator/validador.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  
  miFormulario : FormGroup = this.fb.group({
    nombre : ['', [Validators.required, Validators.pattern(this.vs.expresionNombre)]],
    email : ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.ev]],
    username : ['', [Validators.required, this.vs.noPuedeSerGabriel]],
    password : ['', [Validators.required, Validators.minLength(6)]],
    rpassword : ['', [Validators.required]]

  },
  {
    validators : [this.vs.camposIguales('password', 'rpassword')]
  });


  get msgErrorEmail () : string {

    const errors = this.miFormulario.get('email')?.errors;    
    if(errors?.['required']){
      return 'El campo es obligatorio';
    }else if(errors?.['pattern']){
      return 'El Email no es valido';
    }else if(errors?.['emailTomado']){
      return 'El Mail ya esta es uso';
    }
    


    return '';

  }

  constructor(private fb  : FormBuilder,
              private vs  :ValidadorService,
              private ev  : EmailValidatorService  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre : 'gabriel quintana',
      email  : 'test1@gmail.com',
      username : 'gquintana',
      password : '123456',
      rpassword : '123456'
    });
  }

  validaCampo(campo : string){

   return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;

  }

  enviarSudmit(){

    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

    
      if(this.miFormulario.invalid){
        return;
      }
    
  }




}
