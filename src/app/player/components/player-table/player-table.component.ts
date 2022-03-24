import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {


  @Input() listPlayersHijo: Player[] = [];



  constructor() { }

  ngOnInit(): void {
  }

}
