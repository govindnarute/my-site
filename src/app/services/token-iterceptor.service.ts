import { Injectable } from '@angular/core'
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TokenIterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req, next) {
    let token = req.clone({
      setHeaders: {
        'auth-token': ' Bearer xyz.ysd.sdds'
      }
    })
    return next.handle(token)
  }
}
