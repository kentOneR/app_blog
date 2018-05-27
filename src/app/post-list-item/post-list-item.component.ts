import { Component,Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.services';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() index: number;

  postDate  = new Date();
  
  constructor(private postService: PostService){

  }

  ngOnInit() {
  }

  addLike() {
    this.postLike = this.postLike + 1;
  } 

  addDislike() {
    this.postLike = this.postLike - 1;
  }

  onDelete() {
    this.postService.deleteOne(this.index);
  }

}
