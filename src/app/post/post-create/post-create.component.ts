import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  constructor(public postService: PostsService) {}

  onAddPost(form: NgForm) {
    this.postService.addPosts(form.value.title, form.value.content, form.value.category);
  }

}
