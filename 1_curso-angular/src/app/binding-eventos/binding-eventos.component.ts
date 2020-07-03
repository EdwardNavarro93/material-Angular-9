import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-eventos',
  templateUrl: './binding-eventos.component.html',
  styleUrls: ['./binding-eventos.component.css']
})
export class BindingEventosComponent implements OnInit {

  cantidad:number;
  valor:number;
  textoescrito:string;

  constructor() { 
    this.cantidad = 0;
    this.valor=0;
    this.textoescrito=' '
  }

  ngOnInit(): void {
  }

  incrementar(){
    this.cantidad++;
  }
  onTextboxInput(event){
    this.textoescrito = event.target.value;
  }

}
