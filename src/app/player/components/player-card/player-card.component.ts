import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input() listPlayersHijo: Player[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
