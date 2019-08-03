import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LocalStorageService } from 'ngx-webstorage'
declare var $: any

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  isUserLogin: boolean = false
  constructor(private router: Router, private storage: LocalStorageService) {}

  ngOnInit() {
    let token = this.storage.retrieve('token')
    if (token == '' || token == undefined) {
      this.isUserLogin = false
      return
    }
    this.isUserLogin = true
  }

  logout() {
    $('#close').click()
    this.storage.store('token', undefined)
    this.router.navigateByUrl('/admin/login')
  }
}
