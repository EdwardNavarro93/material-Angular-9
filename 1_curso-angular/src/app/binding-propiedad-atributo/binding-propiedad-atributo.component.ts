//Bindings de propiedad se relacionan con las propiedades del DOM, mientras que los bindings de atributo se relacionan con los atributos de una etiqueta HTML

//binding de propiedad sirve para asignar dinamicamente un valor a una propiedad de un elemento de una vista


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-propiedad-atributo',
  templateUrl: './binding-propiedad-atributo.component.html',
  styleUrls: ['./binding-propiedad-atributo.component.css']
})
export class BindingPropiedadAtributoComponent implements OnInit {

  imagenURL: string;
  constructor() { 
  }

  ngOnInit(): void {
    
    this.imagenURL = (<HTMLInputElement>document.getElementById('selectImagen')).value //obtiene el valor que contiene el selector inicialmente
  }

}
