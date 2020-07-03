import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  titulo:string;

  //persona:object //esto genera errores en el compilador pero funciona en el navegador
  persona ={
    nombre: "Edward",
    apellido: "Navarro"
  };

  constructor() { 
    this.titulo= "Clase 1 -Interpolacion";
    
  }

  ngOnInit(): void {
  }

  duplicarTexto(valor:string):string{
    return valor + ' ' + valor
  }

}
