import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { HijoViewchildrenComponent } from '../hijo-viewchildren/hijo-viewchildren.component';

@Component({
  selector: 'app-padre-viewchildren',
  templateUrl: './padre-viewchildren.component.html',
  styleUrls: ['./padre-viewchildren.component.css']
})
export class PadreViewchildrenComponent implements OnInit {

  arr:Array<number>=[1,2,3];

  @ViewChildren(HijoViewchildrenComponent) //hace referencia a todos los elementos con esta clase
  hijos:QueryList<HijoViewchildrenComponent> //crea una variable que me permite interactuar con  los componentes hijo

  constructor() { }

  ngOnInit(): void {
  }

  Agregar(){
    this.arr.push(this.arr.length + 1)
  }

  Eliminar(){
    this.arr.pop()
  }

  cambiarColor(indice:number){
    if(!indice){return;}//en el caso que no haya ningun elemento
    const component = this.hijos.toArray()[indice] //guarda el componente elegido
    component.cambiarColor() //cambia el color del componente elegido
  }

  invertirColores(){
    this.hijos.forEach((componente:HijoViewchildrenComponent) => { //a cada uno de los componentes le invertira su color
      componente.cambiarColor()
    }
    )
  }


}
