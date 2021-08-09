import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,NbCardModule, NbTabsetModule, NbLayoutModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { MoviesComponent } from './movies/movies.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BookmarksComponent,
    MovieCardComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbCardModule,
    NbInputModule,
    NbTabsetModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
