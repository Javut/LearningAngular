import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {


  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

// El Output sirve para emitir eventos del hijo al padre, entre las llaves se especifica el tipo de datos que se tiene que enviar en este caso seria Personaje
//El Output se crea en el componente hijo
//  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }


    this.dbzService.agregarPersonaje(this.nuevo);
    // console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {nombre: '', poder: 0}


  }



}
