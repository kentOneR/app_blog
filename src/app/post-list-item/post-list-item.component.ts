import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() postDate: string;

  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.postLike = this.postLike + 1;
  } 

  addDislike() {
    this.postLike = this.postLike - 1;
  } 

}