import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-editar-personaje',
  templateUrl: './editar-personaje.component.html',
  styleUrls: ['./editar-personaje.component.css']
})
export class EditarPersonajeComponent implements OnInit {

  personaje;
  mostrarFormulario = false;

  constructor(
    private readonly _personajeService: PersonajeService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        const obsPersonaje = this._personajeService.obtenerUnoPorId(id);
        obsPersonaje.subscribe(
          (personaje: any) => {            
            this.personaje = personaje;
            this.llenarFormularioConDatosDePersonaje()
          },
          (error) => {
            console.log('Error: ', error);
            
          }
        )
      }
    );
  }

  llenarFormularioConDatosDePersonaje(){
    this.mostrarFormulario = true;
  }

  editarPersonaje(personaje){
    const obsEditarPersonaje = this._personajeService.editar(personaje, this.personaje.id);
    obsEditarPersonaje.subscribe(
      (datos) => {
        const url = ["/personaje", "lista"];
        this._router.navigate(url);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }

}
