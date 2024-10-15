import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthService   {
    constructor(private router: Router) {
    }

    canActivate() {
        const token = false;
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}


const canActivateApp: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(AuthService).canActivate()
    }