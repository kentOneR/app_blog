export class PostService{
    posts = [
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
    
    deleteOne(i:number){
        var index = i;
        this.posts.splice(index, 1);
    }
}