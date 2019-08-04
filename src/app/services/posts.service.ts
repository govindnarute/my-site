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
  getpostSite() {
    return this.http.get(ApiEndpoint.URL + 'admin/posts/site')
  }
  getpost(id) {
    return this.http.get(ApiEndpoint.URL + 'admin/posts/' + id)
  }
  updateViewCount(id, view_count) {
    return this.http.put(
      ApiEndpoint.URL + 'admin/posts/' + id + '/view_count',
      {
        view_count: view_count
      }
    )
  }

  savePost(title, short_description, description, url_key) {
    return this.http.post(ApiEndpoint.URL + 'admin/posts', {
      title: title,
      short_description: short_description,
      description: description,
      url_key: url_key
    })
  }
  updatePost(id, title, short_description, description, url_key) {
    return this.http.put(ApiEndpoint.URL + 'admin/posts/' + id, {
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
