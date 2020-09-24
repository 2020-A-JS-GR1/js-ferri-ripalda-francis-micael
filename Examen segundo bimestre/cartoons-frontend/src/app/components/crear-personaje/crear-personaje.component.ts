import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent implements OnInit {

  constructor(
    private readonly _personajeService: PersonajeService,
    private readonly router: Router  
  ) { }

  ngOnInit(): void {
  }

  crearPersonaje(personaje){    
    const obsCrear = this._personajeService.crear(personaje);
    obsCrear.subscribe(
      (datos) => {
        const url = ["/personaje", "lista"];
        this.router.navigate(url);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }
}
