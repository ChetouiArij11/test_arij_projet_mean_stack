import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts !:Post[];
  constructor(private postService: PostService) {
    this.posts = this.postService.posts;}

}
