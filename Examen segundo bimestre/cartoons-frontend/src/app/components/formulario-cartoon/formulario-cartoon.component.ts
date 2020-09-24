import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-cartoon',
  templateUrl: './formulario-cartoon.component.html',
  styleUrls: ['./formulario-cartoon.component.css']
})
export class FormularioCartoonComponent implements OnInit {

  @Input() tituloInput: string;
  @Input() productoraInput: string;
  @Input() anioEstrenoInput: number;
  @Input() clasificacionInput: string;
  @Input() directorInput: string;

  @Output() informacionValidada: EventEmitter<any> = new EventEmitter<any>();

  tituloModelo: string;
  productoraModelo: string;
  anioEstrenoModelo: number;
  clasificacionModelo: string;
  directorModelo: string;

  constructor() { }

  ngOnInit(): void {
    if(this.tituloInput && this.productoraInput && this.anioEstrenoInput && this.clasificacionInput && this.directorInput){
      this.tituloModelo = this.tituloInput;
      this.productoraModelo = this.productoraInput;
      this.anioEstrenoModelo = this.anioEstrenoInput;
      this.clasificacionModelo = this.clasificacionInput;
      this.directorModelo = this.directorInput;
    }
  }

  crearCartoon(){
    // Validar
    const cartoon = {
      titulo: this.tituloModelo,
      productora: this.productoraModelo,
      anioEstreno: this.anioEstrenoModelo,
      clasificacion: this.clasificacionModelo,
      director: this.directorModelo
    };
    this.informacionValidada.emit(cartoon);
  }

}
