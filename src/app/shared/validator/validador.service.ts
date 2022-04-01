import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {

  expresionNombre : string = "([a-zA-Z]+) ([a-zA-Z]+)";
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerGabriel(control : FormControl){
    const valor : string =  control.value?.trim().toLowerCase();

    if(valor === 'gabriel'){
      return {
        noGabriel : true
      }
    }else{
      return null;
    }
  }

  camposIguales(campo1 : string, campo2 : string){

   return (formGroup : AbstractControl ) : ValidationErrors | null =>{  

    const pass = formGroup.get(campo1)?.value;
    const rpass = formGroup.get(campo2)?.value;

    console.log(pass, rpass);

    if(pass !== rpass){
      formGroup.get(campo2)?.setErrors({noIguales : true})
      return {  noIguales : true  }
    }
      formGroup.get(campo2)?.setErrors(null)
    
    
    return null;


   }

  }




  constructor() { }
}
