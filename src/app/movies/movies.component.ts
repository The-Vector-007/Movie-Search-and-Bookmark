import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../Model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  searchQuery : string = "";

  movies$!: Observable<Array<Movie>>;

  constructor(private readonly movieService: MovieService) {}

  displayMovies() {
    this.movies$ = this.movieService.searchMovie(this.searchQuery);
  }
}
