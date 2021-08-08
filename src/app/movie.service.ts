import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Movie } from './movie.model';

@Injectable()
export class MovieService {

  private readonly API_KEY = `bc185885`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

}