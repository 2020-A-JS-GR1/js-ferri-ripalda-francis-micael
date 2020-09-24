import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartoonService {
  url = "http://localhost:1337";

  constructor(private readonly _httpClient: HttpClient) { }

  obtenerUnoPorId(idCartoon: number){
    return this._httpClient.get(this.url + "/cartoon/" + idCartoon);
  }

  traerTodos(consulta?: string){
    return this._httpClient.get(this.url + "/cartoon?" + consulta);
  }

  crear(cartoon){
    return this._httpClient.post(this.url + "/cartoon", cartoon);
  }

  editar(cartoon, idCartoon){
    return this._httpClient.put(this.url + "/cartoon/" + idCartoon, cartoon);
  }

  eliminar(idCartoon: number){
    return this._httpClient.delete(this.url + "/cartoon/" + idCartoon);
  }
}
