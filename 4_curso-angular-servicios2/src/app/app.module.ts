import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostsModule } from './posts/posts.module';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';
import { MenuComponent } from './menu/menu.component'

@NgModule({
  declarations: [
    AppComponent,
    BotonPanicoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    PostsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
