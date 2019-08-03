import { Component, OnInit } from '@angular/core'
import { PostsService } from 'src/app/services/posts.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  post: any = ''
  title: any = ''
  shortDescription: any = ''
  description: any = ''
  url_key = ''
  errors: any = []
  constructor(private postService: PostsService, private router: Router) {}

  ngOnInit() {}

  savePost() {
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
}
