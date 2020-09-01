import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input() urlImagen: string;
  @Input() descripcion: string;
  @Input() nombreBoton: string;

  textoEjemplo: string = "Francis";
  urlEjemploImagen: string = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/bXcRw7FL8QzUZOvY2fZdwDv5ymQ.jpg";

  linkTextoEjemplo: string = "wwww.google.com.ec";

  constructor() { }

  ngOnInit(): void {
  }
  ejemploFuncion(){
    alert("HOLA!");
  }
  eventoOnBlur(){
    console.log("Blur");
  }
}
