import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SafePipe } from './safe.pipe'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms'
import { NavbarComponent } from './navbar/navbar.component'
import { HomeComponent } from './home/home.component'
import { ArchiveComponent } from './archive/archive.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    NavbarComponent,
    HomeComponent,
    ArchiveComponent,
    BlogDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
