import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { LoginComponent } from './login/login.component';
import { TagsComponent } from './tags/tags.component';
import { TagFilterComponent } from './tag-filter/tag-filter.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PostItemComponent } from './post-item/post-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    PostDetailsComponent,
    LoginComponent,
    TagsComponent,
    TagFilterComponent,
    NewPostComponent,
    HeaderComponent,
    NavComponent,
    PostItemComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
