import { Component, OnInit } from '@angular/core';
import { Registro } from '../models/registro';
import { Subscripcion } from '../models/subscripcion.enum';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model:Registro ={username: '', password:'', subscripcion:Subscripcion.Gratuita, promociones: true} // se crea un modelo para trabajar con los campos mas facilmente

  subscripciones: any[] = []
  constructor() { }

  ngOnInit(): void {
    for (let item in Subscripcion){
      if(isNaN(Number(item))){
        this.subscripciones.push({text: item, value: Subscripcion[item]})
      }
    }
  }

  submit(){
    console.log(this.model) //imprime el formulario guardado
  }

  refresh(){
    this.model = {username: '', password:'', subscripcion:Subscripcion.Gratuita, promociones: true}
  }

}
