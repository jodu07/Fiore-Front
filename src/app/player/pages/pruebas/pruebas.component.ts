import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Player } from '../../interfaces/player.interface';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  player!: Player;

  constructor(private _playerService: PlayerService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


    this.activatedRoute.params
      .subscribe( ({idPlayer}) => {
         console.log(idPlayer);
          
          this._playerService.getPlayerForId(idPlayer)
          .subscribe( (player:any) => {
            console.log(player);
            this.player = player[0];
            console.log(this.player.name)
          });
      }); 
    
 /*
    this.activatedRoute.params
        .pipe(
          switchMap( ({idPlayer}) => this._playerService.getPlayerForId( idPlayer ) ),
          tap( console.log )
        )
        .subscribe( player => 
        //  console.log(player);
          this.player = player          
          
          );

const idPlayer = <number>this.activatedRoute.snapshot.params['idPlayer'];
    console.log('id de entrada: '+idPlayer);

    if(idPlayer){
      this._playerService.getPlayerForId(idPlayer)
      .subscribe( (player:any) => {
        console.log(player);
        this.player = player[];
        console.log(this.player.name)
      });        
    }

    */        


  }
  
  
  
}

