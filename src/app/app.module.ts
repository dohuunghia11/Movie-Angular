import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {FormsModule} from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MovieService} from './movie.service';
import { MessageComponent } from './message/message.component';
import {MessageService} from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
