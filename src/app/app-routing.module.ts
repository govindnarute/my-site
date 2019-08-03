import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ArchiveComponent } from './archive/archive.component'
import { BlogDetailsComponent } from './blog-details/blog-details.component'

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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
