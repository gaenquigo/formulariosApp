import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario? : NgForm; 


  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(){
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }

  precioValido(){
    return this.miFormulario?.controls['precio']?.value <= 0 && this.miFormulario?.controls['precio']?.touched;
  }

  guardar(){

    console.log(this.miFormulario);

  }

}
