import { Injectable, inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { tap } from 'rxjs/internal/operators/tap';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthService {
    constructor(
        private router: Router,
        private dataService: DataService,
        private tokenStorage: TokenStorageService
    ) {}

    login(email: string, password: string) {
        return this.dataService.getToken(email, password).pipe(
            tap((response: any) => {
                const token = response?.token;
                if (token) {
                    this.tokenStorage.setToken(token);
                }
            })
        );
    }

    logout(): void {
        this.tokenStorage.clear();
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return this.tokenStorage.isAuthenticated();
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}

const canActivateApp: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(AuthService).canActivate();
    };