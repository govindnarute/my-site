import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ArchiveComponent } from './archive/archive.component'
import { BlogDetailsComponent } from './blog-details/blog-details.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { PostsComponent } from './admin/posts/posts.component'
import { AddPostComponent } from './admin/add-post/add-post.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  },
  {
    path: 'blog/:id/:title',
    component: BlogDetailsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'admin/posts',
    component: PostsComponent
  },
  {
    path: 'admin/posts/new',
    component: AddPostComponent
  },
  {
    path: '*',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
