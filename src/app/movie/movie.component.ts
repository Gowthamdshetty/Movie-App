import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
// import { RootObject } from './Search';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  searchText: string;
  response:any;

  constructor(private service: MovieService) { }

  ngOnInit() {
  }

  getMatchingTitles(){
    this.service.searchMoviesByTitle(this.searchText);
    this.response = this.service.response;
    console.log('in movie component = '+this.response);
  }
}
