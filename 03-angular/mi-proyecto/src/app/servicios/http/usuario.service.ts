import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class UsuarioService{
    url = "http://localhost:1337";

    constructor(
        private readonly _httpCLient: HttpClient // Servicio
    ){}

    traerTodos(){
        return this._httpCLient.get(this.url + "/Usuario");
    }
}
