import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  mensaje:string; // variable donde se guarda la info a compartir
  private enviarmensajeSubject= new Subject<string>(); //variable que permite compartir mensajes (tipo string o cualquier tipo de variable) con diferentes componentes mediante una subscripcion a este servicio
  enviarmensajeObservable = this.enviarmensajeSubject.asObservable(); //variable auxiliar que permite simplificar la sintaxis para que los componentes puedan suscribirse al servicio

  //los componentes deben sucribirse al mismo servicio para poder compartir informacion

  constructor() { }

  enviarMensaje(mensaje:string){ //funcion que envia la informacion de un componente a otro
    this.mensaje=mensaje;
    this.enviarmensajeSubject.next(this.mensaje)
  }
}
