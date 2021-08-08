import { Component } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent{


    bookmarks! : Movie[]

    constructor(){}

    getBookmarks(){
      const data = localStorage.getItem('bookmarks');
      if( data != null ){
        this.bookmarks = JSON.parse(data);
        console.log('Bookmarked')
      }
    }

    removeBookmark( currentMovieTitle : String ){
      
      for( let i = 0; i < this.bookmarks.length; i++ ){
        if( this.bookmarks[i].Title === currentMovieTitle ){
          this.bookmarks.splice(i,1);
          localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
          return;
        }
      }

    }

    ngOnInit(): void{
      this.getBookmarks();
    }

}
