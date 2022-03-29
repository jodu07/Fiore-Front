import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/player/interfaces/player.interface';

@Component({
  selector: 'app-table-player',
  templateUrl: './table-player.component.html',
  styleUrls: ['./table-player.component.css']
})
export class TablePlayerComponent implements OnInit {

  @Input() listPlayersHijo: Player[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
