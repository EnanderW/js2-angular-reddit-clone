import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Post } from '../post';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  id: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }

  get user(): User | undefined {
    return this.userService.users.find((all) => all.id === this.id);
  }

  get posts(): Post[] {
    return this.postService.posts.filter((all) => all.userId === this.id);
  }
}
