import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Post } from './post';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiComments: Comment[] = [];
  private localComments: Comment[] = [];

  constructor() {
    this.loadApiData().then((comments) => (this.apiComments = comments));
    this.localComments = this.loadLocalData();
  }

  private async loadApiData() {
    let result = await fetch('https://dummyjson.com/comments?limit=500');
    let json = await result.json();
    return json.comments;
  }

  private loadLocalData(): Comment[] {
    let comments = localStorage.getItem('comments');
    return !comments ? [] : JSON.parse(comments);
  }

  public get comments(): Comment[] {
    return this.apiComments.concat(this.localComments);
  }

  public addComment(body: string, post: Post, user: User) {
    this.localComments.push({
      id: this.apiComments.length + this.localComments.length + 1,
      body,
      postId: post.id,
      user: { id: user.id, username: user.username },
    });

    localStorage.setItem('comments', JSON.stringify(this.localComments));
  }
}
