import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje =
    {
      nombre: 'Jaider',
      poder: 200000
    }

    // get personajes(): Personaje[] {
    //   return this.dbzService.personajes;
    // }

    //Se puede emplear la palabra debugger para debuggiar el codigo de ts

    agregarNuevoPersonaje(argumento: Personaje){
      // this.personajes.push(argumento);
    }

    constructor(){}


    // private dbzService: DbzService

}
