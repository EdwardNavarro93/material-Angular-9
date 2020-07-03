import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {
  urlusers:string = environment.apiURL + 'users/'
  urlposts:string = environment.apiURL + 'posts/'

  constructor(private http: HttpClient) { 

  }
  
  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlusers)
  }

  obtenerPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.urlposts)
  }

  obtenerPostsporId(id:string):Observable<Post[]>{
    const url = `${this.urlposts}?userId=${id}`
    return this.http.get<Post[]>(url)
  }
}
