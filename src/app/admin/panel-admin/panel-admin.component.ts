import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/player/services/player.service';
import { Router } from '@angular/router';
import { Player } from '../../player/interfaces/player.interface';


@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {


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
