import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string
  password: string
  constructor(
    private authServices: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.spinner.show()
    this.authServices.login(this.email, this.password).subscribe(
      (res: any) => {
        if (res.success) {
          this.spinner.hide()
        } else {
          this.spinner.hide()
        }
      },
      (err: any) => {
        this.spinner.hide()
      }
    )
  }
}
