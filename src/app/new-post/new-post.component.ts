import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  tags: string[] = [];

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router,
  ) {}

  uploadPost(title: string, content: string): void {
    let user = this.authService.loginUser;
    if (!user) return;

    this.postService.addPost(title, content, this.tags, user);
    this.router.navigate(['/']);
  }

  addTag(tag: string): void {
    this.tags.push(tag);
  }

  removeTag(tag: string): void {
    this.tags = this.tags.filter((all) => all !== tag);
  }
}
