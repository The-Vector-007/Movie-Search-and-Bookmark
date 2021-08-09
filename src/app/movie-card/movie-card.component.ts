import { ThrowStmt } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Movie } from '../Model/movie.model'

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {

  bookmarks! : Movie[] //storing Movie objects for localstorage

  bookmarkMovie( currentMovie : Movie ){
    currentMovie.active = !currentMovie.active // toggle the bookmark icon color

    const getBookmarks = localStorage.getItem('bookmarks'); // get bookmarks from localstorage

    if( getBookmarks == null ){ // if there are no bookmarks initialize bookmarks with an empty array
      this.bookmarks = [];
    }
    else{
      this.bookmarks = JSON.parse(getBookmarks); // else parse & assign the data
    }

    let movieFound : boolean = false; // checking whether the selected movie is already present

    for( let i = 0; i < this.bookmarks.length; i++ ){
      if( this.bookmarks[i].imdbID == currentMovie.imdbID ){
        movieFound = true;
      }
    }

    if( movieFound ){ // if present do nothing
      console.log('Movie is already present!')
    }
    else{ // if not present add it to bookmarks and set it to localstorage
      this.bookmarks.push( currentMovie ); 
      localStorage.setItem('bookmarks', JSON.stringify( this.bookmarks ))
    }

  }

  @Input() movie! : Movie; //this component will receieve the Movie object from parent

}
