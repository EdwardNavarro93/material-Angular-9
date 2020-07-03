import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PostsComponent } from './posts/posts.component';

// en este modulo es donde se colocan las reglas de ruteo
const routes: Routes = [
  //cada regla de ruteo es un objeto
  {path: 'usuarios', component: UsuariosComponent}, //si la url tiene 'usuarios' mostrara el componente usuarios
  {path: 'posts', component:PostsComponent},
  {//path: 'abcd'
  path: '', redirectTo: '/usuarios', pathMatch: 'full'}, //por defecto se mostrara el componente de usuarios, patmatch:'full' significa que la url debe tener escrito especificamente lo que este en el path, existe otra opcion para pathMatch denominada prefix el cual indica que todo lo que comienze con lo que este escrito en path sera aceptable
  
  {path: 'usuarios/:id/post', component:PostsComponent},  //se define un parametro de ruta (id) que variara dinamicamente  


  {path: '**',  //en el caso de que no haya ninguan regla de ruteo definida redireccione a usuarios (esto siempre debe ir al final de las reglas de ruteo puesto que el orden si importa)
  redirectTo: '/usuarios', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
