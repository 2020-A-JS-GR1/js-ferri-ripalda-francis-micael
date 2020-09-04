import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input() urlImagen: string;
  @Input() descripcion: string;
  @Input() nombreBoton: string;

  @Output() eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output() eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>()

  textoEjemplo: string = "Francis";

  linkTextoEjemplo: string = "https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjds_DEwdDrAhVsu1kKHfwJBzgQPAgIwww.google.com.ec";

  constructor() { }

  ngOnInit(): void {
  }
  ejemploFuncion(){
    alert("HOLA!");
  }
  eventoOnBlur(){
    console.log("Blur");
  }
  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true);
  }
  ejecutarEventoDioClicImagen(){
    this.eventoDioClicEnImagen.emit(true);
  }
}
