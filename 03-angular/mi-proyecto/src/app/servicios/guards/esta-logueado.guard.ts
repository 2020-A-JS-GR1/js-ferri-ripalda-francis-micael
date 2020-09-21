import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class EstaLogueadoGuard implements CanActivate {

    constructor(
        private readonly _authService: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // LOGICA DE NEGOCIO AQUI
        if(this._authService.estaAutenticado){
            return true;
        } else {
            return false;
        }
    }
}
