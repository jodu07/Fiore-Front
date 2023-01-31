import { Component, OnInit } from '@angular/core';
import { Historial } from '../../interfaces/historial.interface';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-historial-page',
  templateUrl: './historial-page.component.html',
  styleUrls: ['./historial-page.component.css']
})
export class HistorialPageComponent implements OnInit {

  historial: Historial[] = [];

  constructor(private _playerService: PlayerService) { }

  obtenerhistorial(){
    this._playerService.getHistorial().
    subscribe( historial => 
      this.historial = <any>historial)
  }

  ngOnInit(): void {    
    this.obtenerhistorial();   
  }

}
