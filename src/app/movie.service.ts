import { Injectable } from '@angular/core';
import {Movie} from '../model/moive';
import {fakeMovies} from './fake-movies';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  getMovieFromID(id: number): Observable<Movie> {
    return of(fakeMovies.find(movie => movie.id === id));
  }
  constructor(public messageService: MessageService) { }
}
