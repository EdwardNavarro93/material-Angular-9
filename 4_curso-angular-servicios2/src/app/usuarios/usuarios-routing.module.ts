import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';


const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //declara reglas de ruteo para este modulo en especifico
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
