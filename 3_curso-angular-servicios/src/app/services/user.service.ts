import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL= environment.apiURL + 'users/' //la api donde se va a conectar

  constructor(private http: HttpClient) { //variable que realizara las peticiones http
  }
  getUser(userId:string):Observable<User>{//permite realizar acciones cuando la comunicacion es exitosa, falla, etc
    const url = this.baseURL + userId
    return this.http.get<User>(url) //realiza una peticion get y devuelve una respuesta
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL)
  }

  getUserswithHeaders():Observable<any>{
    return this.http.get(this.baseURL, {observe: 'response'}) //parametro adicional que permite leer la cabecera de la respuesta http
  }

  createUser(user:User): Observable<User>{
    return this.http.post<User>(this.baseURL , user) //envia informacion mediante post 
  }
}
