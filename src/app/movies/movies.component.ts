import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/moive';
import {MovieService} from '../movie.service';

const MOVIES: Movie[] = [
  {
    id: 1,
    name: 'Green Arrow',
    releaseYear: 2000
  },
  {
    id: 2,
    name: 'The Flash',
    releaseYear: 2001
  },
  {
    id: 3,
    name: 'Iron Man',
    releaseYear: 1998
  },
  {
    id: 4,
    name: 'Spider Man',
    releaseYear: 2019
  }
];
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // movie: Movie = {
  //   id: 1,
  //   name: 'Star War',
  //   releaseYear: 2000
  // };
  // movies = MOVIES;
  movies1: Movie[];
  // selectedMovie: Movie;
  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMoviesFromService();
  }
  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  // }
  // getMoviesFromService(): void {
  //   // this.movies1 = this.movieService.getMovies();
  //   this.movieService.getMovies().subscribe(
  //     (updateMovies) => {
  //       this.movies1 = updateMovies;
  //       console.log(`this.movies1 = ${JSON.stringify(this.movies1)}`);
  //     }
  //   );
  // }
  getMoviesFromService(): void {
    // this.movies1 = this.movieService.getMovies();
    this.movieService.getMovies().subscribe(updateMovies =>
        this.movies1 = updateMovies
    );
  }
}
