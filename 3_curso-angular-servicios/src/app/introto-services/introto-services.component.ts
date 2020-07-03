import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-introto-services',
  templateUrl: './introto-services.component.html',
  styleUrls: ['./introto-services.component.css']
})
export class IntrotoServicesComponent implements OnInit {

  constructor(private miservicio:FirstService){ //declara una variable donde se guarda el servicio y a la cual se le pueden acceder a todas las propiedads y metodos que contiene el servicio

  }

  ngOnInit(): void {
  }

  handleClick(){
    this.miservicio.firstAlert('Soy un ejemplo de inyeccion de servicios') //utilizo una funcion que esta implementada en el servicio

  }

}
