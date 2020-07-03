import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-hijo-a',
  templateUrl: './hijo-a.component.html',
  styleUrls: ['./hijo-a.component.css']
})
export class HijoAComponent implements OnInit {

  constructor(public comunicationservice:ComunicacionService) { }

  ngOnInit(): void {
  }

}
