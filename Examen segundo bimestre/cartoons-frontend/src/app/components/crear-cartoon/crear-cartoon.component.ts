import { Component, Input, OnInit, Output } from '@angular/core';
import { CartoonService } from '../../services/cartoon.service';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-crear-cartoon',
  templateUrl: './crear-cartoon.component.html',
  styleUrls: ['./crear-cartoon.component.css']
})
export class CrearCartoonComponent implements OnInit {

  cartoon;

  cartoonCreado: boolean;
  recargarLista: boolean;

  constructor(
    private readonly _cartoonService: CartoonService,
    private readonly _personajeService: PersonajeService,
    private readonly router: Router
  ) { 
    this.cartoonCreado = false;
    this.recargarLista = false;
  }

  ngOnInit(): void {
  }

  crearCartoon(cartoon){
    const obsCrear = this._cartoonService.crear(cartoon);
    obsCrear.subscribe(
      (datos) => {
        this.cartoon = datos;
        this.cartoonCreado = true;
      },
      (error) => {
        console.log("Error", error);
      }
    );
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
