import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoViewchildComponent } from '../hijo-viewchild/hijo-viewchild.component';

@Component({
  selector: 'app-padre-viewchild',
  templateUrl: './padre-viewchild.component.html',
  styleUrls: ['./padre-viewchild.component.css']
})
export class PadreViewchildComponent implements OnInit {

  texto:string;
  mensajedeError:string;

  @ViewChild('hijo') //hace referencia al componente con la variable 
  //ViewChild(HijoViewchildComponent) //hace referencia al componente con la clase

  componentehijo:HijoViewchildComponent; //crea una variable que me permite interactuar con el componente hijo

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(){
    if(!this.texto){
      this.mensajedeError='Debe escribir un mensaje primero'
    }
    else{
      this.componentehijo.editarMensaje(this.texto) //accede a la funcion del componente hijo desde el componente padre
    }
  }

}
