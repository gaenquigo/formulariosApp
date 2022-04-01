import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private fb : FormBuilder) { }


  miFormulario : FormGroup = this.fb.group({
   genero : ['M', [Validators.required]],
   notificaciones : [ true , Validators.required],
   condiciones : [true, Validators.requiredTrue]

  });

  ngOnInit(): void {

    this.miFormulario.reset(
      {
        ...this.persona,
       condiciones : false}
       );

     
       this.miFormulario.valueChanges.subscribe(form => {
         //delete form.condiciones;
         console.log(form)
       });



  }

  persona = {
    genero : 'F',
    notificaciones : true 
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;

  }


}
