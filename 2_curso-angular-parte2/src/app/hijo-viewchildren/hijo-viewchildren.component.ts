import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-viewchildren',
  templateUrl: './hijo-viewchildren.component.html',
  styleUrls: ['./hijo-viewchildren.component.css']
})
export class HijoViewchildrenComponent implements OnInit {
  colorcheck:boolean;

  constructor() { 
    this.colorcheck=true;
  }

  ngOnInit(): void {
  }

  cambiarColor(){
    this.colorcheck=!this.colorcheck
  }

}
