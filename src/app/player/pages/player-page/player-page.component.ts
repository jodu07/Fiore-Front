import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../interfaces/player.interface';
import { Historial } from '../../interfaces/historial.interface';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  
  

  listPlayers: Player[] = [];

  arqueros: Player[] = [];
  defensas: Player[] = [];
  mediocampistas: Player[] = [];
  delanteros: Player[] = [];

  namesPositions = {
  por :'porteros',
  def : 'defensores',
  med : 'mediocampistas',
  ata : 'atacantes'
  }



  constructor( private _playerService: PlayerService, 
               private router: Router,
                private activatedRoute: ActivatedRoute) { }


  listarJugadores(){
    this._playerService.getPlayers()
    .subscribe( res => {
      console.log(res);
      this.listPlayers=<any>res;

      for ( let player of this.listPlayers){
        if(player.position === 'arquero'){
          this.arqueros.push(player);
        }else if(player.position === 'defensa'){
          this.defensas.push(player);
        }else if(player.position === 'mediocampista'){
          this.mediocampistas.push(player);
      }else if(player.position === 'delantero'){
        this.delanteros.push(player);   
      }      
  }
 // console.log("arqueros:",this.arqueros); 
});
}

  ngOnInit(): void {
    this.listarJugadores();
}


}
