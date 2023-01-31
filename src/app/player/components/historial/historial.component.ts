import { Component, Input, OnInit } from '@angular/core';
import { Historial } from '../../interfaces/historial.interface';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  @Input() historialHijo: Historial[]=[];


  constructor() { }

  
  ngOnInit(): void {

    
  }

}
