import { Component, Input } from '@angular/core';
import { Comment } from '../comment';
import { User } from '../user';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent {
  @Input() comment: Comment = {} as Comment;
  @Input() user: User | undefined = undefined;
}
