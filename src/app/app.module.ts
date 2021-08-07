import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,NbCardModule, NbTabsetModule } from '@nebular/theme';
import { MoviesComponent } from './movies/movies.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BookmarksComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbCardModule,
    NbTabsetModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
