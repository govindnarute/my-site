import { Injectable } from '@angular/core'
import { ApiEndpoint } from '../util/api-endpoint'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getposts() {
    return this.http.get(ApiEndpoint.URL + 'admin/posts')
  }
  getpost(id) {
    return this.http.get(ApiEndpoint.URL + 'admin/posts/' + id)
  }

  savePost(title, short_description, description, url_key) {
    return this.http.post(ApiEndpoint.URL + 'admin/posts', {
      title: title,
      short_description: short_description,
      description: description,
      url_key: url_key
    })
  }
  postPublish(id) {
    return this.http.put(ApiEndpoint.URL + 'admin/posts/' + id + '/publish', {})
  }
  unPublish(id) {
    return this.http.put(
      ApiEndpoint.URL + 'admin/posts/' + id + '/unpublish',
      {}
    )
  }
}
