import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class EsSupervisorGuard implements CanActivate {

    constructor(
        private readonly _authService: AuthService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // LOGICA DE NEGOCIO AQUI
        const esSupervisor = this._authService.roles.some(
            (rol: string) => {
                return rol === "Supervisor";
            }
        )
        return esSupervisor;
    }
}