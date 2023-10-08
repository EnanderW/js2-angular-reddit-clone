import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { Post } from '../post';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-filter',
  templateUrl: './tag-filter.component.html',
  styleUrls: ['./tag-filter.component.css'],
})
export class TagFilterComponent {
  tag: string = '';

  constructor(
    private postService: PostService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params.subscribe((params) => (this.tag = params['name']));
  }

  get posts(): Post[] {
    return this.postService.posts.filter((all) => all.tags.includes(this.tag));
  }

  getUser(post: Post): User | undefined {
    return this.userService.users.find((all) => all.id === post.userId);
  }
}
