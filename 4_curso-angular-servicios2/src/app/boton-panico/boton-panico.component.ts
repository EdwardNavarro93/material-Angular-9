import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-panico',
  templateUrl: './boton-panico.component.html',
  styleUrls: ['./boton-panico.component.css']
})
export class BotonPanicoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ayuda(){
    alert("has pedido ayuda gracias")
  }

  cancelar(){
    this.router.navigate([{outlets: {popup: null}}]) //cierra la ruta secundaria
  }

}
