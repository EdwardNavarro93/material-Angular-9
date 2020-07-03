import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //necesario para utilizar ngModel


//importa los componentes que contendra el modulo
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingEventosComponent } from './binding-eventos/binding-eventos.component';
import { BindingPropiedadAtributoComponent } from './binding-propiedad-atributo/binding-propiedad-atributo.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';
import { ComunicacionComponentesComponent } from './comunicacion-componentes/comunicacion-componentes.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { ComponentePadre2Component } from './componente-padre2/componente-padre2.component';
import { ComponenteHijo2Component } from './componente-hijo2/componente-hijo2.component';
import { ComponentePadre3Component } from './componente-padre3/componente-padre3.component';
import { HijoAComponent } from './hijo-a/hijo-a.component';
import { HijoBComponent } from './hijo-b/hijo-b.component';
import { NietoAComponent } from './nieto-a/nieto-a.component';
import { NietoBComponent } from './nieto-b/nieto-b.component';

@NgModule({  //decorador que pemite configurar la clase modulo
  declarations: [ //carga los componentes del modulo
    AppComponent, 
    InterpolacionComponent, 
    BindingEventosComponent, 
    BindingPropiedadAtributoComponent, 
    DirectivasAtributoComponent, DirectivasEstructuralesComponent, ComunicacionComponentesComponent, ComponentePadreComponent, ComponenteHijoComponent, ComponentePadre2Component, ComponenteHijo2Component, ComponentePadre3Component, HijoAComponent, HijoBComponent, NietoAComponent, NietoBComponent
  ],
  imports: [ //carga modulos del mismo angular o creados
    BrowserModule,
    FormsModule
  ],
  providers: [], //cargar servicios
  bootstrap: [AppComponent] //componente principal que se va a cagar
})
export class AppModule { } //se exporta el modulo
