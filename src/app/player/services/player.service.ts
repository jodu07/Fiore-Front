import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../interfaces/player.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url='/api';

  constructor(private http: HttpClient) { }


  //get jugadores
  getJugadores():Observable<Player>{
  return this.http.get<Player>('/api');
}


}


