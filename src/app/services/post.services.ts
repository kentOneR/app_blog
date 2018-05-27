import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [];

  constructor(private httpClient: HttpClient) { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://appblog-23b19.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  savePostsToServer() {
    this.httpClient
      .put('https://appblog-23b19.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteOne(i: number) {
    var index = i;
    this.posts.splice(index, 1);
    this.emitPostSubject();
    this.savePostsToServer();
  }

  addLike(i: number) {
    var index = i;
    this.posts[index].loveIts = this.posts[index].loveIts + 1;
    this.savePostsToServer();
  }

  addDislike(i: number) {
    var index = i;
    this.posts[index].loveIts = this.posts[index].loveIts - 1;
    this.savePostsToServer();
  }

  addPost(title: string, content: string) {
    const postObject = {
      title: '',
      content: '',
      loveIts: 0
    };
    postObject.title = title;
    postObject.content = content;
    this.posts.push(postObject);
    this.emitPostSubject();
    this.savePostsToServer();
}


}