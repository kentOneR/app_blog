import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.services';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  messageSend = false;

  constructor(private postService: PostService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    this.postService.addPost(title, content);
    if (form.valid) {
      form.reset();
      this.messageSend = true;
    }
  }

}
