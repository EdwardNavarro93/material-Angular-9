import { Component } from '@angular/core';

// decorador para la clase componente componente que indica los metadatos
@Component({
  selector: 'app-root',                   // como se llamara el componente en la plantilla HTML del componente
  templateUrl: './app.component.html',    // la ruta donde se encuentra la plantilla HTML del componente
  styleUrls: ['./app.component.css']      // los estilos que tendra la plantilla del componente 
})

//clase que contiene toda la parte funcional del componente (variables y funciones que dan vida al componente)
export class AppComponent {
  title = 'curso-angular';
}
