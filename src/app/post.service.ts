import { Injectable } from '@angular/core';
import { Post } from './post';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiPosts: Post[] = [];
  private localPosts: Post[] = [];

  constructor() {
    this.loadApiData().then((posts) => (this.apiPosts = posts));
    this.localPosts = this.loadLocalData();
  }

  private async loadApiData() {
    let result = await fetch('https://dummyjson.com/posts?limit=200');
    let json = await result.json();
    return json.posts;
  }

  private loadLocalData(): Post[] {
    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public get posts(): Post[] {
    return this.apiPosts.concat(this.localPosts);
  }

  public addPost(title: string, body: string, tags: string[], user: User) {
    this.localPosts.push({
      id: this.apiPosts.length + this.localPosts.length + 1,
      title,
      body,
      tags,
      reactions: 0,
      userId: user.id,
    });

    localStorage.setItem('posts', JSON.stringify(this.localPosts));
  }
}
