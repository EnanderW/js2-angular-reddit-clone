import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent {
  id: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService,
    private authService: AuthService,
  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }

  get post(): Post | undefined {
    return this.postService.posts.find((all) => all.id === this.id);
  }

  get user(): User | undefined {
    let post = this.post;
    if (!post) return undefined;

    return this.userService.users.find((all) => all.id === post?.userId);
  }

  get comments(): Comment[] | undefined {
    let post = this.post;
    if (!post) return undefined;

    let comments = this.commentService.comments.filter(
      (all) => all.postId === post?.id,
    );

    return comments;
  }

  getUser(comment: Comment): User | undefined {
    return this.userService.users.find((all) => all.id === comment.user.id);
  }

  sendComment(body: string): void {
    let post = this.post;
    let user = this.authService.loginUser;
    if (!post || !user) return;

    this.commentService.addComment(body, post, user);
  }
}
