import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input-busqueda',
  templateUrl: './input-busqueda.component.html',
  styleUrls: ['./input-busqueda.component.css']
})
export class InputBusquedaComponent implements OnInit {

  @Input() placeholder:string = '';


  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();  // onDevbaucer para que se emiota cuando se deja de escribir

  debouncer: Subject<string> = new Subject();                        // el subject es un observable

  termino: string = '';

  enviarTerminoABuscar(){
    this.onEnter.emit(this.termino);
   }


  //ngOnit se dispara solo una vez cuando el componente es creado
  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( valor => {   // el next está subscrito aqui en el subscribe
     // console.log('bebouncer:', valor);
      this.onDebounce.emit( valor );
    });  
  }

  teclaPresionada( ){

     this.debouncer.next( this.termino ); // el next está subscrito en el bedouncer del ngOnInit
  
  }

  constructor(){}

}
