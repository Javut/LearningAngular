import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//El servicio es una clase abstracta donde se coloca la información y los metodos para interactuar con fuentes externas o para manipular el estado de la información de la
//aplicacion, cuando se requiera manipular data u obtenerla se debe hacer uso del servicio

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 20000
    },
    {
      nombre: 'Vegeta',
      poder: 8000
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
      this._personajes.push(personaje);
    }



}
