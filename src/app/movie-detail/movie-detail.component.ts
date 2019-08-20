import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../model/moive';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFromRoute();
  }
  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieFromID(id).subscribe(movie => this.movie = movie);
  }
  goBack(): void {
    this.location.back();
  }
}
