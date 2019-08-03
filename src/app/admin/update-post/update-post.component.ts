import { Component, OnInit } from '@angular/core'
import { PostsService } from 'src/app/services/posts.service'
import { Router, ActivatedRoute } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  post: any = ''
  title: any = ''
  shortDescription: any = ''
  description: any = ''
  url_key = ''
  errors: any = []

  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostsService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPost(this.activateRoute.snapshot.params['id'])
  }

  savePost1() {
    this.errors = []

    if (
      this.title == undefined ||
      this.title == '' ||
      this.description == undefined ||
      this.description == '' ||
      this.shortDescription == '' ||
      this.shortDescription == undefined
    ) {
      this.errors.push('Please enter compulsory fields')
      return
    }

    this.url_key = this.title.split(' ').join('_')
    this.postService
      .savePost(
        this.title,
        this.shortDescription,
        this.description,
        this.url_key
      )
      .subscribe(
        (res: any) => {
          if (res.success) {
            this.router.navigateByUrl('/admin/posts')
          }
        },
        (err: any) => {}
      )
  }
  getPost(id) {
    this.spinner.show()
    this.postService.getpost(id).subscribe(
      (res: any) => {
        if (res.success) {
          this.post = res.posts[0]
          this.title = this.post.title
          this.shortDescription = this.post.short_description
          this.description = this.post.description
          this.spinner.hide()
        }
      },
      (err: any) => {
        this.spinner.hide()
      }
    )
  }
}
