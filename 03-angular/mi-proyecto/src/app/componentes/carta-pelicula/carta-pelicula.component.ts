import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {

  @Input() urlImagen: string;
  @Input() descripcion: string;
  @Input() nombreBoton: string;

  @Output() eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output() eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>()

  textoEjemplo: string = "Francis";

  linkTextoEjemplo: string = "https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwjds_DEwdDrAhVsu1kKHfwJBzgQPAgIwww.google.com.ec";

  constructor() { 
    console.log("Constructor");
    // No utilice configraciones (llamadas a servicios y asi) dentro del constructor, esto debe ser hecho en el onInit
  }

  ngOnInit(): void {
    console.log("INIT");
    // Logica inicial del componente
  }

  ngOnDestroy(): void {
    console.log("Destroy");
    // Describirnos de las subscripciones
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
