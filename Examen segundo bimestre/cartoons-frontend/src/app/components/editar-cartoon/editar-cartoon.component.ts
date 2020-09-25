import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonajeService } from 'src/app/services/personaje.service';
import { CartoonService } from '../../services/cartoon.service';

@Component({
  selector: 'app-editar-cartoon',
  templateUrl: './editar-cartoon.component.html',
  styleUrls: ['./editar-cartoon.component.css']
})
export class EditarCartoonComponent implements OnInit {

  cartoon;

  cartoonCreado: boolean;
  mostrarFormulario:boolean;
  recargarLista: boolean;

  constructor(
    private readonly _cartoonService: CartoonService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _personajeService: PersonajeService,
    private readonly _router: Router
  ) { 
    this.cartoonCreado = false;
    this.mostrarFormulario = false;
    this.recargarLista = false;
  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        const obsPersonaje = this._cartoonService.obtenerUnoPorId(id);
        obsPersonaje.subscribe(
          (cartoon: any) => {            
            this.cartoon = cartoon;
            this.llenarFormularioConDatosDeCartoon()
          },
          (error) => {
            console.log('Error: ', error);
          }
        )
      }
    );
  }

  llenarFormularioConDatosDeCartoon(){
    this.mostrarFormulario = true;
    this.cartoonCreado = true;
  }

  editarCartoon(cartoon){
    const obsEditarPersonaje = this._cartoonService.editar(cartoon, this.cartoon.id);
    obsEditarPersonaje.subscribe(
      (datos) => {
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

  crearPersonaje(personaje){    
    this.recargarLista = true;
    const obsCrear = this._personajeService.crear(personaje);
    obsCrear.subscribe(
      (datos) => {
        // Aqui enviar a recargar
        setTimeout(() => {this.recargarLista = false}, 1000);
      },
      (error) => {
        console.log("Error: ", error);
        setTimeout(() => {this.recargarLista = false}, 1000);
      }
    )
  }
}
