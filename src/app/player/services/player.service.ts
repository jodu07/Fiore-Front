import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../interfaces/player.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url='http://localhost:3000';

  constructor(private http: HttpClient) { }


  //get jugadores
  getPlayers():Observable<Player>{

  const url = `${this.url}/api/`;

  
  return this.http.get<Player>(url);
}


 searchNamePlayer(termino: string): Observable<Player>{  


  return this.http.get<Player>(`${this.url}/api/${termino}`);   
 }
 

 searchForPosition(termino: string): Observable<Player>{    

  return this.http.get<Player>(`${this.url}/api/${termino}`); 
   
}



getPlayerForId( id_player: number ): Observable<Player>{

  const url = `${this.url}/api/${id_player}`;

  console.log(url);

  
  return this.http.get<Player>(url); 

  



}






}


