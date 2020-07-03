import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo2',
  templateUrl: './componente-hijo2.component.html',
  styleUrls: ['./componente-hijo2.component.css']
})
export class ComponenteHijo2Component implements OnInit {

  textohijo:string;

  @Output()
  enviar: EventEmitter<string> = new EventEmitter<string>() //evento que permite enviar un valor del tipo string hacia el componente padre

  @Output()
  enviarMayusculas: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  botonClick(){
    this.enviar.emit(this.textohijo)//envia la informacion hacia el componente padre
  }
  botonClickMayusculas(){
    this.enviarMayusculas.emit(this.textohijo.toUpperCase())
  }


}
