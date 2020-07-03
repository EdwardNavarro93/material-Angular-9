import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-nieto-b',
  templateUrl: './nieto-b.component.html',
  styleUrls: ['./nieto-b.component.css']
})
export class NietoBComponent implements OnInit {

  mensaje:string

  constructor(private serviciocomunicacion:ComunicacionService) { //variable que permite la suscripcion al servicio 

  }

  ngOnInit(): void {
    // se establece la comunicacion con el servicio
    this.serviciocomunicacion.enviarmensajeObservable.subscribe(mensaje => {
      this.mensaje=mensaje; //cualquier cambio en el servicio se mostrara en el textarea
    })
  }

  cambioTexto(mensaje:string){
    this.serviciocomunicacion.enviarMensaje(mensaje) // se comparte la informacion con el servicio (cada que se haga un cambio en el textarea se guardara dicho cambio en el servicio)
  }


}
