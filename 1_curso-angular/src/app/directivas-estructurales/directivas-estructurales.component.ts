import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas-estructurales',
  templateUrl: './directivas-estructurales.component.html',
  styleUrls: ['./directivas-estructurales.component.css']
})
export class DirectivasEstructuralesComponent implements OnInit {
  
  checkeado:boolean;
  infocargada:boolean;
  componente:boolean;
  nombres:Array<string>;
  personas: object[];
  libros: object[];
  option: string;
  ver_contenido:boolean=false;
  //nombres: string[]

  constructor() { 
    this.checkeado=false;
    this.infocargada= false;
    this.componente = false;
    this.nombres = ["Edward Navarro", "Leny Mota", "Carla Medina"];
    this.personas = [
      {nombre:'Edward Navarro', edad:26},
      {nombre:'Leny Mota', edad:30},
      {nombre:'Carla Medina', edad:18}
    ];
    this.libros = [
      {titulo:'Libro 1', anio:1990},
      {titulo:'Libro 2', anio:2000},
      {titulo:'Libro 3', anio:2010},
      {titulo:'Libro 4', anio:2020},
      {titulo:'Libro 5', anio:2030}
    ];
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.infocargada= true;
    }, 3000);

  }

}
