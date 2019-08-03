import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router
} from '@angular/router'
import { LocalStorageService } from 'ngx-webstorage'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storage: LocalStorageService) {}
  canActivate() {
    let token = this.storage.retrieve('token')
    if (token == '' || token == undefined) {
      this.router.navigateByUrl('/admin/login')
      return false
    }
    console.log('INSIDE THE AUTH GAURD')

    return true
  }
}
