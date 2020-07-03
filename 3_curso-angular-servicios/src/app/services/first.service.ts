import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  firstAlert(mensaje:string){ //una de las funciones que realizara este serviios
    alert(mensaje)
  }
}
