import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
  // declarations: Hace referencia a los componentes que va a contener mi modulo
  //exports: son las cosas que quiero hacer publicas
  //imports: van unicamente modulos
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule  //Importante para que se puedan tomar las directivas personalizadas de angular empleadas en el componente
  ]
})
export class HeroesModule{}

