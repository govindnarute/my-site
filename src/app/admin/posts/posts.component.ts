import { Component, OnInit } from '@angular/core'
import { PostsService } from 'src/app/services/posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = []
  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postService.getposts().subscribe(
      (res: any) => {
        console.log(res)
        if (res.success) {
          console.log(res)
          this.posts = res.posts
        }
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
}
