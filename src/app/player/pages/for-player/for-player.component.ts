import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; 
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-for-player',
  templateUrl: './for-player.component.html',
  styleUrls: ['./for-player.component.css']
})
export class ForPlayerComponent implements OnInit {


  player!: Player;



 

  constructor(private _playerService: PlayerService,
              private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {


    this.activatedRoute.params
      .subscribe( ({idPlayer}) => {
         console.log(idPlayer);
          
          this._playerService.getPlayerForId(idPlayer)
          .subscribe( player => {
            console.log(player);
            this.player = player;
          });
      }); 



    /*

    this.activatedRoute.params
        .pipe(
          switchMap( ({idPlayer}) => this._playerService.getPlayerForId( idPlayer ) ),
          tap( console.log )
        )
        .subscribe( player => 
          this.player = player          
         // {console.log(pais);}  
          );
  }
  */

}
}