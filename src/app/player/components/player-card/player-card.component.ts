import { Component, Input, OnInit } from '@angular/core';
import { Historial } from '../../interfaces/historial.interface';
import { Player } from '../../interfaces/player.interface';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input() listPlayersHijo: Player[]=[];


  historial: Historial={
    fecha: '',
    hora: '',
    descripcion: ''
  }  

  constructor(private _playerService: PlayerService) { }

  ngOnInit(): void {
  }

  guardarHistorial(){

    const fechaActual = new Date();
    this.historial.fecha = fechaActual.toDateString();
    this.historial.hora = fechaActual.toLocaleTimeString('en-US'); 
    this.historial.descripcion = 'Se guardó Historial';
    
    this._playerService.addHistorial(this.historial).subscribe();
     
    
    this._playerService.getHistorial().
    subscribe( res => {
      console.log('respuesta', res);
    }
    )
  }

}
