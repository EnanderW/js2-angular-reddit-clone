import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  constructor(private postService: PostService) {}

  get tags(): string[] {
    let all: string[] = [];

    for (let post of this.postService.posts) {
      for (let tag of post.tags) {
        if (!all.includes(tag)) {
          all.push(tag);
        }
      }
    }

    return all;
  }
}
