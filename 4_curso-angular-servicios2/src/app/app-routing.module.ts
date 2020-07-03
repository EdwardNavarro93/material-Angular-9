import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BotonPanicoComponent } from './boton-panico/boton-panico.component';


const routes: Routes = [
  {path: 'panico', component: BotonPanicoComponent, outlet:'popup'}, //aqui indica cual router utlet se va a modificar
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'}
  //{path: '**', redirectTo: '/usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //declara reglas de ruteo en el modulo raiz
  exports: [RouterModule]
})
export class AppRoutingModule { }
