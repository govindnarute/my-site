import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PostsService } from '../services/posts.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostsService,
    private spinner: NgxSpinnerService
  ) {}
  post: any
  ngOnInit() {
    this.getPost(this.activateRoute.snapshot.params['id'])
  }
  getPost(id) {
    this.spinner.show()
    this.postService.getpost(id).subscribe(
      (res: any) => {
        if (res.success) {
          this.post = res.posts[0]
          let view_count = this.post.view_count + 1
          this.updateViewCount(this.post._id, view_count)
          this.spinner.hide()
        }
      },
      (err: any) => {
        this.spinner.hide()
      }
    )
  }
  updateViewCount(id, count) {
    this.postService.updateViewCount(id, count).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }
}
