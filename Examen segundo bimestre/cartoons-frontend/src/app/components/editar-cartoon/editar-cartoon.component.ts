import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartoonService } from '../../services/cartoon.service';

@Component({
  selector: 'app-editar-cartoon',
  templateUrl: './editar-cartoon.component.html',
  styleUrls: ['./editar-cartoon.component.css']
})
export class EditarCartoonComponent implements OnInit {

  cartoon;
  mostrarFormulario= false;

  constructor(
    private readonly _cartoonService: CartoonService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) { }

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
  }

  editarCartoon(cartoon){
    const obsEditarPersonaje = this._cartoonService.editar(cartoon, this.cartoon.id);
    obsEditarPersonaje.subscribe(
      (datos) => {
        const url = ["/cartoon", "lista"];
        this._router.navigate(url);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }
}
