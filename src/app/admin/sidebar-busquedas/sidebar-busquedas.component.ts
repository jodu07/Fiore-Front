import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-busquedas',
  templateUrl: './sidebar-busquedas.component.html',
  styles: [
    `
       li {
            cursor: pointer;
          }
    `
  ]
})
export class SidebarBusquedasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
