import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      title: 'Mon premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      loveIts: 1,
    },
    {
      title: 'Mon deuxième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      loveIts: -1,

    },
    {
      title: 'Encore un post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      loveIts: 0,
    } 
  ];

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


}