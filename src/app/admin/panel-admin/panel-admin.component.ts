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

  placeholder: string = 'Buscar por Nombre...';
  termino: string = '';

  listPlayers: Player[] = [];

  positions: string[] = ['del', 'def', 'arq'];
  positionActiva: string = "";


  constructor( private _playerService: PlayerService, private router: Router) { }


  listarJugadores(){
    this._playerService.getPlayers()
    .subscribe( res => {
      console.log(res);
      this.listPlayers=<any>res;
    },
    err => console.log(err)
    );
      
  }

  buscar( terminoInput: string){
    //console.log(this.termino);

    this.termino = terminoInput;

    
    this._playerService.searchNamePlayer(this.termino)
    .subscribe( (players) => {
      this.listPlayers = <any>players;

    }, (err) => {
      this.listPlayers = [];
    })   
  }


  getClaseCss( position: string ): string{
    return(position === this.positionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarPosition( position: string){

    if( position === this.positionActiva ) { return;} //para que no recargue nada si se presiona el mismo termino

    this.positionActiva = position;
    this.listPlayers = [];

    // sTODO: hacer llamado a servicio

    this._playerService.searchForPosition(this.positionActiva)
    .subscribe( players => this.listPlayers = <any>players);
  }

  
  sugerencias( termino: string){

  }

  ngOnInit(): void {
    this.listarJugadores();
  }


}
