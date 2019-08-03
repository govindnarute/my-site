import { Component, OnInit } from '@angular/core'
import { PostsService } from 'src/app/services/posts.service'
import { NgxSpinnerService } from 'ngx-spinner'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = []
  constructor(
    private postService: PostsService,
    private spinner: NgxSpinnerService
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
}
