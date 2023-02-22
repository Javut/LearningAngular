import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Batman'];
  heroeBorrado: string = "";

  borrarHeroe(){
    if(this.heroes.length>0){
     this.heroeBorrado = this.heroes.pop() || ''; //Si es undefined se emplea entonces el operador vacio para contemplar ese caso
    }else
    {
      console.log('No existen elementos dentro de la lista');

    }

  }

}
