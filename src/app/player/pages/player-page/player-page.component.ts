import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  listPlayers: Player[] = [];

  constructor( private _playerService: PlayerService, private router: Router) { }


  listarJugadores(){
    this._playerService.getJugadores()
    .subscribe( res => {
      console.log(res);
      this.listPlayers=<any>res;
    },
    err => console.log(err)
    );
      
  }


  ngOnInit(): void {
    this.listarJugadores();
  }

}
