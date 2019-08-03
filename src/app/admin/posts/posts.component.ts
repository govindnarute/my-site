import { Component, OnInit } from '@angular/core'
import { PostsService } from 'src/app/services/posts.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
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
    this.postService.getposts().subscribe(
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

  postPublish(id) {
    this.spinner.show()
    this.postService.postPublish(id).subscribe(
      (res: any) => {
        if (res.success) {
          this.spinner.hide()
          this.getPosts()
        }
      },
      (err: any) => {
        this.spinner.hide()
      }
    )
  }
  unPublish(id) {
    this.spinner.show()
    this.postService.unPublish(id).subscribe(
      (res: any) => {
        if (res.success) {
          this.spinner.hide()
          this.getPosts()
        }
      },
      (err: any) => {
        this.spinner.hide()
      }
    )
  }

  goToEdit(id) {
    this.router.navigateByUrl('/admin/posts/update/' + id)
  }
}
