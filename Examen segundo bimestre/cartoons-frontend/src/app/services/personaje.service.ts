import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonajeService {

  url = "http://localhost:1337";

  constructor(private readonly _httpClient: HttpClient) { }

  obtenerUnoPorId(idPersonaje: number){
    return this._httpClient.get(this.url + "/personaje/" + idPersonaje);
  }

  traerTodos(consulta?: string){
    return this._httpClient.get(this.url + "/personaje?" + consulta);
  }

  crear(personaje){
    return this._httpClient.post(this.url + "/personaje", personaje);
  }

  editar(personaje, idPersonaje){
    return this._httpClient.put(this.url + "/personaje/" + idPersonaje, personaje);
  }

  eliminar(idPersonaje: number){
    return this._httpClient.delete(this.url + "/personaje/" + idPersonaje);
  }
}
