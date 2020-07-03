import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-padre2',
  templateUrl: './componente-padre2.component.html',
  styleUrls: ['./componente-padre2.component.css']
})
export class ComponentePadre2Component implements OnInit {

  textopadre:string;

  constructor() { }

  ngOnInit(): void {
  }

  recibirMensaje(mensaje:string){
    this.textopadre= mensaje;
  }

}
