import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-metodo-post',
  templateUrl: './metodo-post.component.html',
  styleUrls: ['./metodo-post.component.css']
})
export class MetodoPostComponent implements OnInit {

  model:User = {id: 0, name: '', username: '', email: 'ed@gmail.com'}

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log("el usuario que se va a enviar sera")
    //console.log(this.model)
    this.userService.createUser(this.model).subscribe( //envia la informacion que se desea insertar al servicio
      (response:User)=>console.log(response)
    )
  }

}
