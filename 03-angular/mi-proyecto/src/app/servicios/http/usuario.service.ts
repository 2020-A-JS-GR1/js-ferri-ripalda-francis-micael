import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class UsuarioService{
    url = "http://localhost:1337";

    constructor(
        private readonly _httpCLient: HttpClient // Servicio
    ){}

    obtenerUnoPorId(idUsuario: number){
        return this._httpCLient.get(this.url + "/Usuario/" + idUsuario);
    }

    traerTodos(consulta?: string){
        return this._httpCLient.get(this.url + "/Usuario?" + consulta);
    }

    // POST /usuario
    crear(usuario){
        return this._httpCLient.post(
            this.url + "/usuario",
             usuario
        )
    }

    editar(usuario, id){
        return this._httpCLient.put(this.url + "/Usuario/"+ id, usuario)
    }

    eliminar(idUsuario: number){
        return this._httpCLient.delete(this.url+"/Usuario/" + idUsuario)
    }
}
