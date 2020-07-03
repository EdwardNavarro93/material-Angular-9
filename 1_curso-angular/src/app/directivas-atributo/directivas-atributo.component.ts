import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-atributo',
  templateUrl: './directivas-atributo.component.html',
  styleUrls: ['./directivas-atributo.component.css']
})
export class DirectivasAtributoComponent implements OnInit {

  colorcheck:boolean;
  tamanocheck: boolean;
  cambiarcolor:boolean;
  valor: string
  texto:string
  constructor() { 
    this.colorcheck = false;
    this.tamanocheck = false;
    this.cambiarcolor = false;
    this.texto =' ' 
  }

  ngOnInit(): void {
  }

  cambiarValor(event){
    this.valor=event.target.value;
  }

}
