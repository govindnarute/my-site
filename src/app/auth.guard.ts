import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {
    console.log('INSIDE THE AUTH GAURD')

    return true
  }
}
