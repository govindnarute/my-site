import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ArchiveComponent } from './archive/archive.component'
import { BlogDetailsComponent } from './blog-details/blog-details.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { PostsComponent } from './admin/posts/posts.component'
import { AddPostComponent } from './admin/add-post/add-post.component'
import { AdminBlogDetailsComponent } from './admin/admin-blog-details/admin-blog-details.component'
import { LoginComponent } from './admin/login/login.component'
import { AuthGuard } from './auth.guard'
import { UpdatePostComponent } from './admin/update-post/update-post.component'

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
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'admin/posts/new',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/posts/update/:id',
    component: UpdatePostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/blog/:id/:title',
    component: AdminBlogDetailsComponent,
    canActivate: [AuthGuard]
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
