import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SafePipe } from './safe.pipe'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner'
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { ArchiveComponent } from './archive/archive.component'
import { BlogDetailsComponent } from './blog-details/blog-details.component'
import { FooterComponent } from './footer/footer.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { PostsComponent } from './admin/posts/posts.component'
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component'
import { AddPostComponent } from './admin/add-post/add-post.component'
import { AdminBlogDetailsComponent } from './admin/admin-blog-details/admin-blog-details.component'
import { LoginComponent } from './admin/login/login.component'
import { TokenIterceptorService } from './services/token-iterceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NavbarComponent,
    HomeComponent,
    ArchiveComponent,
    BlogDetailsComponent,
    FooterComponent,
    PortfolioComponent,
    PostsComponent,
    AdminNavbarComponent,
    AddPostComponent,
    AdminBlogDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
