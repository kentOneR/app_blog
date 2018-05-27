import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const title = form.value['title'];
    const status = form.value['content'];
  }

}
