import { Component, Input } from '@angular/core';
import { Movie } from '../Model/movie.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent{
    
    bookmarks! : Movie[]

    constructor(){}

    getBookmarks(){

      const data = localStorage.getItem('bookmarks');// get the bookmarks from local Storage

      if( data != null ){ // if user has bookmarked some movies then parse and assign the data
        this.bookmarks = JSON.parse(data);
        console.log('Bookmarked')
      }

    }

    removeBookmark( currentMovieTitle : String ){ //will recieve the movie which needs to be remove from bookmarks
      
      for( let i = 0; i < this.bookmarks.length; i++ ){ 
        if( this.bookmarks[i].Title === currentMovieTitle ){  //If the title of current Movie is present in the bookmarks, remove it
          this.bookmarks.splice(i,1);
          localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks)); // update local storage
          return;
        }
      }

    }

    ngOnInit(): void{ //get the bookmarks when page loads for the first time
      this.getBookmarks(); 
    }

}
