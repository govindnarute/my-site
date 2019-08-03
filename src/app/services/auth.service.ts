import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ApiEndpoint } from '../util/api-endpoint'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email, pass) {
    console.log(email)
    console.log(pass)
    return this.http.post(ApiEndpoint.URL + 'admin/login', {
      email: email,
      password: pass
    })
  }
}
