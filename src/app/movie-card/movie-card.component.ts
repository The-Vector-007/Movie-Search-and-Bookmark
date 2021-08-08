import { ThrowStmt } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  bookmarks! : Movie[]

  bookmarkMovie( currentMovie : Movie ){
    currentMovie.active = !currentMovie.active

    const getBookmarks = localStorage.getItem('bookmarks');

    if( getBookmarks == null ){
      this.bookmarks = [];
    }
    else{
      this.bookmarks = JSON.parse(getBookmarks);
    }

    let movieFound : boolean = false;

    for( let i = 0; i < this.bookmarks.length; i++ ){
      if( this.bookmarks[i].imdbID == currentMovie.imdbID ){
        movieFound = true;
      }
    }

    if( movieFound ){
      console.log('Movie is already present!')
    }
    else{
      this.bookmarks.push( currentMovie );
      localStorage.setItem('bookmarks', JSON.stringify( this.bookmarks ))
    }

  }

  @Input() movie! : Movie;

}
