import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NewPostComponent } from './new-post/new-post.component';
import { LoginComponent } from './login/login.component';
import { TagsComponent } from './tags/tags.component';
import { TagFilterComponent } from './tag-filter/tag-filter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profiles/:id', component: ProfileDetailsComponent },
  { path: 'details/:id', component: PostDetailsComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'tags/:name', component: TagFilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
