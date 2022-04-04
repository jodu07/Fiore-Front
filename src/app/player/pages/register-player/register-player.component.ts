import { Component, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css']
})
export class RegisterPlayerComponent implements OnInit {


 // player!:Player;


  player:Player={
    idPlayer: 0,
    name: "",
    last: "",
    image: "",
    dorsal: 0,
    position: 0
  };

  constructor( private _playerService: PlayerService,
               private router: Router) { }


  registerPlayer(){
   // delete this.player.idPlayer;
    this._playerService.addPlayer(this.player).subscribe();
    this.router.navigate(['/login']);

  }

  ngOnInit(): void {
  }

}
