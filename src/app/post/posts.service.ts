import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPosts(title: string, content: string, category: string) {
    const post: Post = {title: title, content: content, category: category};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);

  }
}
