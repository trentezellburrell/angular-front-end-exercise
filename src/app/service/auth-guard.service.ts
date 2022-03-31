import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GlobalService } from './global-service';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuardService implements CanActivate {

    constructor(
        private globService: GlobalService,
        private router: Router,
    ) {
    }

    canActivate() {
        if (this.globService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/register']);
            return false;
        }
    }
}
