import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private postService: PostService,
    private userService: UserService,
  ) {}

  get posts(): Post[] {
    return this.postService.posts;
  }

  getUser(post: Post): User | undefined {
    return this.userService.users.find((all) => all.id === post.userId);
  }
}
