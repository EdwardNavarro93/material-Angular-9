import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { WebAPIService } from '../services/web-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[]

  constructor(private router:Router, // variable que permite el routeo en Angular
    private route: ActivatedRoute, //permite leer los parametros de la ruta
    private webAPIservice: WebAPIService) { 
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(//accede a los parametros de ruta
      params => {
        if(params.has("id")){ //si el parametro de ruta id esta presente
          this.webAPIservice.obtenerPostsporId(params.get("id")).subscribe(
            (post: Post[]) => this.posts = post,
            error => console.log(error)
          )
        }
        else{ //en caso de que no se encuentre el parametro de ruta
          this.webAPIservice.obtenerPosts().subscribe(
            (post: Post[]) => this.posts = post,
            error => console.log(error))
        }
      }
    )

  }

  navegaraUsuarios(){
    this.router.navigate(['/usuarios']) //indica el comando que se va a ejecutar sobre la url (en este caso ir a usuarios)
  }

}
