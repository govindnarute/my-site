import { Component, OnInit } from '@angular/core'

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
  constructor() {}

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
    console.log(this.url_key)
  }
}
