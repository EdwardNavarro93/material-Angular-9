import { Component, OnInit } from '@angular/core';
import { Subscripcion } from '../models/subscripcion.enum';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  subscripciones: any[] = []

  registerForm= this.formBuilder.group({ //configura valores del formulario por defecto
    username: ['', Validators.required], //aqui mismo se validan los campos
    password: ['', {
      validators: [Validators.required, Validators.minLength(4)]  //validaciones sincronas
      }],
    subscripcion: [Subscripcion.Basica],
    promociones: [true]
  })
  
  get usrName(){
    return this.registerForm.get('username')
  }

  get contrasenia(){
    return this.registerForm.get('password')
  }

  constructor(private formBuilder:FormBuilder) { //permite conectar el formulario de forma reactiva

  }

  ngOnInit(): void {
    for (let item in Subscripcion){
      if(isNaN(Number(item))){
        this.subscripciones.push({text: item, value: Subscripcion[item]})
      } 
    }
  }

  submit(){

    if(!this.registerForm.valid){ //asegura que el formulario sea valido
      alert("alguna regla de validacion no es valida")
      return
    }

    console.log("el formulario se ha enviado")
    console.log(this.registerForm.value) //obtiene el valor del formulario
  }

  refresh(){
    this.registerForm.patchValue({ //funcion que actualiza los campos del formulario
      username: '',
      password: '',
      subscripcion: Subscripcion.Basica,
      promociones: true

    })
  }

}
