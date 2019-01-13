import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { PostCommentComponent } from '../post-comment/post-comment.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostsService, public dialog: MatDialog) {}

  title: string;
  content: string;
  category: string;

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {this.posts = posts; });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();

  }

  openDialog(post: Post): void {
    const dialogRef = this.dialog.open(PostCommentComponent, {
      width: '500px',
      data: {title: post.title, content: post.content, category: post.category}
    });

    dialogRef.afterClosed().subscribe();
  }

}
