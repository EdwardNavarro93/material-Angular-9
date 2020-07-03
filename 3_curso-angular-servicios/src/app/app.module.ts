import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { IntrotoServicesComponent } from './introto-services/introto-services.component';
import { PeticionGetComponent } from './peticion-get/peticion-get.component';
import { MetodoPostComponent } from './metodo-post/metodo-post.component';

@NgModule({
  declarations: [
    AppComponent,
    IntrotoServicesComponent,
    PeticionGetComponent,
    MetodoPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //permite hacer peticiones http
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
