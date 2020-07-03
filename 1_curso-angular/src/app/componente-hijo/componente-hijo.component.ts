import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  
  //@Input()  //esto permite asignar el valor de esta variable desde el componente padre
  //textohijo:string;

  private textohijo:string;

  @Input()

  set textoHijo(value:string){ //obtiene el valor del padre y se le asigna a la funcion textoHijo del componente hijo 
    value=value || ''; //asegurarse de que el parametro no sea vacio
    this.textohijo = value.toUpperCase();
  }
  get textoHijo(){return this.textohijo} //luego retorna el nuevo valor alterado al componente hijo

  constructor() { }

  ngOnInit(): void {
  }

}
