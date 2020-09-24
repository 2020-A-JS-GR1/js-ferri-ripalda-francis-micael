import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartoonService } from 'src/app/services/cartoon.service';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrls: ['./formulario-personaje.component.css']
})
export class FormularioPersonajeComponent implements OnInit {

  @Input() nombreInput: string;
  @Input() edadInput: number;
  @Input() descripcionFisicaInput: string;
  @Input() descripcionPsicologicaInput: string;
  @Input() rolInput: string;
  @Input() cartoonInput: number;

  @Output() informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  nombreModelo: string
  edadModelo: number;
  descripcionFisicaModelo: string;
  descripcionPsicologicaModelo: string
  rolModelo: string;
  cartoonModelo: number;

  arregloCartoons: any [];

  constructor(private readonly _cartoonService: CartoonService) { 
    this.arregloCartoons= [];
  }

  ngOnInit(): void {
    this.obtenerCartoons();
  }

  obtenerCartoons(){
    const obsTraerTodos = this._cartoonService.traerTodos("");
    obsTraerTodos.subscribe(
      (cartoons: any) => {
        this.arregloCartoons = cartoons;
        this.cargarDatos();
      },
      (error) => {
        console.log("Error: ", error); 
      }
    )
  }

  cargarDatos(){    
    if(this.nombreInput && this.edadInput && this.descripcionPsicologicaInput && this.rolInput && this.cartoonInput){
      this.nombreModelo = this.nombreInput;
      this.edadModelo = this.edadInput;
      this.descripcionFisicaModelo = this.descripcionFisicaInput;
      this.descripcionPsicologicaModelo = "" + this.descripcionPsicologicaInput;
      this.rolModelo = this.rolInput;
      this.cartoonModelo = this.cartoonInput;
    }
  }

  crearPersonaje(formulario){
    // Validar
    const personaje = {
      nombre:  this.nombreModelo,
      edad: this.edadModelo,
      descripcionFisica:  this.descripcionFisicaModelo,
      descripcionPsicologica: this.descripcionPsicologicaModelo,
      rol: this.rolModelo,
      cartoon: this.cartoonModelo
    };
    this.informacionValidada.emit(personaje);
  }
}
