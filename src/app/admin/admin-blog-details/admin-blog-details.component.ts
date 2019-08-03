import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PostsService } from 'src/app/services/posts.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-admin-blog-details',
  templateUrl: './admin-blog-details.component.html',
  styleUrls: ['./admin-blog-details.component.scss']
})
export class AdminBlogDetailsComponent implements OnInit {
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
          this.spinner.hide()
        }
      },
      (err: any) => {
        this.spinner.hide()
      }
    )
  }
}
