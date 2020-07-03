import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VariablesReferenciaPlantillaComponent } from './variables-referencia-plantilla/variables-referencia-plantilla.component';
import { PadreViewchildComponent } from './padre-viewchild/padre-viewchild.component';
import { HijoViewchildComponent } from './hijo-viewchild/hijo-viewchild.component';
import { from } from 'rxjs';
import { PadreViewchildrenComponent } from './padre-viewchildren/padre-viewchildren.component';
import { HijoViewchildrenComponent } from './hijo-viewchildren/hijo-viewchildren.component';
import { ProyeccionContenidoComponent } from './proyeccion-contenido/proyeccion-contenido.component';
import { HijoProyeccionComponent } from './hijo-proyeccion/hijo-proyeccion.component';
import { PadreProyeccionComponent } from './padre-proyeccion/padre-proyeccion.component';
import { ProyectadoComponent } from './proyectado/proyectado.component';
import { Hijo2ProyeccionComponent } from './hijo2-proyeccion/hijo2-proyeccion.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesReferenciaPlantillaComponent,
    PadreViewchildComponent,
    HijoViewchildComponent,
    PadreViewchildrenComponent,
    HijoViewchildrenComponent,
    ProyeccionContenidoComponent,
    HijoProyeccionComponent,
    PadreProyeccionComponent,
    ProyectadoComponent,
    Hijo2ProyeccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
