import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-lista-personaje',
  templateUrl: './lista-personaje.component.html',
  styleUrls: ['./lista-personaje.component.css']
})
export class ListaPersonajeComponent implements OnInit {

  arregloPersonajes: any[];
  busquedaModelo: string;

  constructor(
    private readonly _personajeService: PersonajeService,
    private readonly _router: Router
  ) { 
    this.arregloPersonajes = [];
    this.busquedaModelo = "";
  }


  ngOnInit(): void {
    this.filtrarArreglo();
  }

  filtrarArreglo(){
    const consulta = {
      nombre: {contains: this.busquedaModelo}
    }
    const consultaString = "where=" + JSON.stringify(consulta);
    const obsTraerTodos = this._personajeService.traerTodos(this.busquedaModelo != "" ? consultaString : "");
    obsTraerTodos.subscribe(
      (cartoons: any) => {
        this.arregloPersonajes = cartoons;
      },
      (error) => {
        console.log("Error: ", error);
        
      }
    )
  }

  irAEditarPersonaje(id: number){
    const ruta = ["/personaje", "editar", id]
    this._router.navigate(ruta);
  }

  eliminarPersonaje(id: number){
    const obsEliminar = this._personajeService.eliminar(id);
    obsEliminar.subscribe(
      () => {
        const indice = this.arregloPersonajes.findIndex( cartoon => cartoon.id === id);
        this.arregloPersonajes.splice(indice,1);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

}
