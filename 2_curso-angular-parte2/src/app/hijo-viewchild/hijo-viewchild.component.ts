import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-viewchild',
  templateUrl: './hijo-viewchild.component.html',
  styleUrls: ['./hijo-viewchild.component.css']
})
export class HijoViewchildComponent implements OnInit {
  mensaje:string

  constructor() { }

  ngOnInit(): void {
  }
  editarMensaje(mensaje:string){
    this.mensaje = mensaje;

  }

}
