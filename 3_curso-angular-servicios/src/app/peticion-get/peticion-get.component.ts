import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-peticion-get',
  templateUrl: './peticion-get.component.html',
  styleUrls: ['./peticion-get.component.css']
})
export class PeticionGetComponent implements OnInit {
  notfound:boolean=false;
  user:User=null;
  users:User[]

  constructor(private userService: UserService) { }

  getUser(userId:string){
    this.notfound=false
    this.user=null
    this.userService.getUser(userId).subscribe(// con la funcion subscribe es que se subscribe al observable del servicio
      (Response:User) => { //en el caso de qe la respuesta sea positiva
        this.user = Response
      },
      (err:any) =>{ //en el caso de que falle la consulta 
        console.error(err)
        this.notfound = true
      })
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (response:User[])=> this.users=response,
      (err:any)=>console.error(err)
    )

    this.userService.getUserswithHeaders().subscribe(
      (response:any) => console.log(response),
      (err:any) => console.error(err)
    )
  }

}
