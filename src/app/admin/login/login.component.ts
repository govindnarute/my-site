import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'
import { LocalStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  errors: any = []
  constructor(
    private authServices: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private storage: LocalStorageService
  ) {}

  ngOnInit() {}

  login() {
    this.errors = []

    if (
      this.email == undefined ||
      this.email == '' ||
      this.password == undefined ||
      this.password == ''
    ) {
      this.errors.push('Please enter Email and Password.')
      return
    }
    this.spinner.show()
    this.authServices.login(this.email, this.password).subscribe(
      (res: any) => {
        if (res.success) {
          this.spinner.hide()
          this.storage.store('token', res.token)
          this.router.navigateByUrl('/admin/posts')
        } else {
          this.errors.push(res.message)
          this.spinner.hide()
        }
      },
      (err: any) => {
        this.errors.push('SOMETHING WENT WORNG')
        this.spinner.hide()
      }
    )
  }
}
