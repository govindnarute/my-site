import { Component, OnInit } from '@angular/core'
import { PostsService } from '../services/posts.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  posts: any = []
  constructor(
    private postService: PostsService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPosts()
  }
  getPosts() {
    this.spinner.show()
    this.postService.getpostSite().subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res)
        if (res.success) {
          console.log(res)
          this.posts = res.posts
        }
      },
      (err: any) => {
        this.spinner.hide()
        console.log(err)
      }
    )
  }
}
