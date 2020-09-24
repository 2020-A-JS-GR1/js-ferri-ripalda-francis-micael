import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartoonService } from '../../services/cartoon.service';

@Component({
  selector: 'app-lista-cartoon',
  templateUrl: './lista-cartoon.component.html',
  styleUrls: ['./lista-cartoon.component.css']
})
export class ListaCartoonComponent implements OnInit {

  arregloCartoons: any [];
  busquedaModelo: string;

  constructor(
    private readonly _cartoonService: CartoonService,
    private readonly _router: Router
  ) { 
    this.arregloCartoons = [];
    this.busquedaModelo = "";
  }

  ngOnInit(): void {
    this.filtrarArreglo();
  }

  filtrarArreglo(){
    const consulta = {
      or: [
        {
          titulo: {contains: this.busquedaModelo}
        },
        {
          productora: {contains: this.busquedaModelo}
        }
      ]
    }
    const consultaString = "where=" + JSON.stringify(consulta);
    const obsTraerTodos = this._cartoonService.traerTodos(this.busquedaModelo != "" ? consultaString : "");
    obsTraerTodos.subscribe(
      (cartoons: any) => {
        this.arregloCartoons = cartoons;
      },
      (error) => {
        console.log("Error: ", error);
        
      }
    )
  }

  irAEditarCartoon(id: number){
    const ruta = ["/cartoon", "editar", id];
    this._router.navigate(ruta);
  }

  eliminarCartoon(id: number){
    const obsEliminar = this._cartoonService.eliminar(id);
    obsEliminar.subscribe(
      () => {
        const indice = this.arregloCartoons.findIndex( cartoon => cartoon.id === id);
        this.arregloCartoons.splice(indice,1);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

}
