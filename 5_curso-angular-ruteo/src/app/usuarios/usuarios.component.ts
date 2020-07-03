import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebAPIService } from '../services/web-api.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private router:Router, // router: variable que permite el routeo en Angular
              private webAPIservice: WebAPIService){ 
   }

  ngOnInit(): void {
    this.webAPIservice.obtenerUsuarios().subscribe(
      (usuariosdelAPI: Usuario[]) => this.usuarios = usuariosdelAPI,
      error => console.log(error)
    )
  }

  verPosts(idusuario:number){
    //this.router.navigate(['/posts']) //indica el comando que se va a ejecutar sobre la url (en este caso ir a posts)
    this.router.navigate(['usuarios', idusuario, 'post']) //navega hacia la ruta definida para cargar post por usuario (la cual utiliza un parametro de ruta)
  }

}
