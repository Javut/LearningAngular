import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ];

  nuevo: Personaje =
    {
      nombre: 'Jaider',
      poder: 200000
    }

    //Se puede emplear la palabra debugger para debuggiar el codigo de ts

    agregarNuevoPersonaje(argumento: Personaje){
      this.personajes.push(argumento);
    }




}
