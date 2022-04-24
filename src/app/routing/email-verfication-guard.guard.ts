import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, Subscription, take, tap } from 'rxjs';
import { AuthService} from '@auth0/auth0-angular'


@Injectable({
  providedIn: 'root'
})
export class EmailVerficationGuardGuard implements CanActivate{

  constructor(private router: Router, private auth: AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user$.pipe(take(1), map(user => {
      if (user) {
        if (!user.email_verified) {
          alert("Please verify your email and refresh the page!")
          this.router.navigate(["/home"])
          return false
        }
        return true
      }

      return false
    }));
  }
}
