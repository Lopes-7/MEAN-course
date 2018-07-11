import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsServices } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsServices) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }
}